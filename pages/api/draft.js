export async function getStaticProps(context) {
  const url = context.draftMode
    ? 'https://draft.example.com'
    : 'https://production.example.com';
  const res = await fetch(url);
  return {
    props: {
      posts: await res.json(),
    },
    revalidate: 120,
  };
}
