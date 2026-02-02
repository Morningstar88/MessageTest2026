export async function getServerSideProps() {
  const res = await fetch("https://your-project.vercel.app/api/hello");
  const data = await res.json();
  return { props: { message: data.message } };
}

export default function Home({ message }) {
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>{message}</h1>
      <p>This message is coming from the serverless function.</p>
    </div>
  );
}
