import { getProviders } from "next-auth/react";

//client side
const Signin = () => {
  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};

export default Signin;

//server side
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
