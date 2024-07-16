import {z} from 'zod';

export const ForgetPasswordFormSchema = z.object({
  email: z.string().email('E-mail inválido').min(1, 'E-mail é obrigatório'),
});

export type ForgetPasswordForm = z.infer<typeof ForgetPasswordFormSchema>;
