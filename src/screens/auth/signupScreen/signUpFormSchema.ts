import {z} from 'zod';

export const SignUpFormSchema = z.object({
  username: z
    .string()
    .regex(
      /^[a-zA-Z0-9_]{1,15}$/,
      'O username deve ter entre 1 e 15 caracteres',
    )
    .min(1, 'O username é obrigatório'),
  name: z
    .string()
    .min(1, 'O nome é obrigatório')
    .transform(v => v.trim())
    .transform(v =>
      v
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    ),
  email: z.string().email('E-mail inválido').min(1, 'E-mail é obrigatório'),
  password: z
    .string()
    .min(1, 'A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type SignUpForm = z.infer<typeof SignUpFormSchema>;
