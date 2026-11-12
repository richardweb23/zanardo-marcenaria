This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Publicação automática no GitHub Pages

O workflow em `.github/workflows/deploy.yml` gera e publica o site sempre que um push chega à branch `main`. Também é possível executá-lo manualmente em **Actions → Publicar site → Run workflow**. O build usa `npm ci` e `npm run build`; somente um build bem-sucedido é publicado.

Para ativar, no GitHub abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. Mantenha o domínio personalizado configurado no Pages e no DNS. O workflow inclui o mesmo domínio usado pelo deploy manual (`zanardomarcenaria.com.br`). Acompanhe o resultado na aba **Actions**.

O comando `npm run deploy` existente envia arquivos à branch `gh-pages`. Após mudar a origem do Pages para GitHub Actions, essa branch deixa de ser a origem publicada; para publicar manualmente, execute o workflow pela aba Actions.

