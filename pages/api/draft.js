export async function getStaticProps(context) {
  const url = context.draftMode
    ? 'https://jasongullickson.com/posts.json'
    : 'https://jasongullickson.com/posts.json';
  const res = await fetch(url);
  return {
    props: {
      posts: await res.json(),
    },
    revalidate: 120,
  };
}
