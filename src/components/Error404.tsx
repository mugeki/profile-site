import Layout from "./Layout";

const Error404: React.FC = () => {
  return (
    <Layout withAside={false}>
      <div className="h-[calc(100vh-74px)] flex flex-col items-center justify-center">
        <p className="text-violet-500 dark:text-violet-500/40 font-extrabold text-9xl cursor-default pointer-events-none">
          404
        </p>
        <p className="text-cente">There is nothing here...</p>
      </div>
    </Layout>
  );
};

export default Error404;
