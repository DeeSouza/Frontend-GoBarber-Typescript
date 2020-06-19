import React, { useCallback, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLock } from 'react-icons/fi';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import { Container, Content, Background, AnimationContainer } from './styles';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        const token = params.get('token');

        if (!token) {
          throw new Error();
        }

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Confirmação Incorreta',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, password_confirmation } = data;

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        });

        addToast({
          type: 'success',
          title: 'Senha atualizada',
          description: 'Faça login com sua nova senha.',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar sua senha.',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
        });
      }
    },
    [addToast, history, params],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form onSubmit={handleSubmit} ref={formRef} autoComplete="off">
            <h1>Resetar Sua Senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova Senha"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmar Senha"
            />

            <Button type="submit">Alterar Senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
