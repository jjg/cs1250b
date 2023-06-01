export async function getStaticProps(context) {
  const url = context.draftMode
    ? 'https://jasongullickson.com/good-enough-software.html'
    : 'https://jasongullickson.com/';
  const res = await fetch(url);
  return {
    props: {
      posts: await res.json(),
    },
    revalidate: 120,
  };
}
