import Link from "next/link";
import { useRouter } from "next/router";

const CatchAllPages = ({ date }) => {
  const { isFallback, pathname, asPath, query } = useRouter();

  if (isFallback) return <div />;

  return (
    <div>
      <h3>{date} - You're at:</h3>
      <pre>
        <code>{JSON.stringify({ pathname, asPath, query }, null, 2)}</code>
      </pre>
      <ul>
        <li><Link href="/[[...slug]]" as="/"><a>Home</a></Link></li>
        <li><Link href="/[[...slug]]" as="/some"><a>Some</a></Link></li>
        <li><Link href="/[[...slug]]" as="/some/thing"><a>Some/Thing</a></Link></li>
        <li><Link href="/[[...slug]]" as="/some/thing/else"><a>Some/Thing/Else</a></Link></li>
      </ul>
    </div>
  );
};
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps = async (ctx) => {
  console.log('PARAMS:', ctx.params);

  return {
    props: { date: new Date().toISOString() },
  };
};

export default CatchAllPages;
