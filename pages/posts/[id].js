export default function Page({ posts }) {
  return posts[0].title;
}
 
export async function getStaticProps(context) {
  const output = context.draftMode
    ? 'draft mode'
    : 'normal mode';
  return {
    props: {
      posts: [
        {
          title: output,
        },
      ],
    },
    revalidate: 120, // In seconds
  };
}
 
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: '1' },
      },
    ],
    fallback: 'blocking',
  };
}
