import { getProviders, signIn } from "next-auth/react";

//client side
const Signin = ({ providers }) => {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        className="object-cover md:w-44 md:h-80 md:inline-flex rotate-6 hidden"
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
        alt="Twitter Phone"
      />
      <div className="">
        {Object.values(providers).map((provider, index) => (
          <div className="flex items-center flex-col" key={index}>
            <img
              src="https://br.atsit.in/vi/wp-content/uploads/2021/11/twitter-xem-xet-nguoi-dung-ghi-nhat-ky-loi-ngoai-iphone.png"
              alt=""
              className="w-36 object-cover"
            />
            <p className="text-center text-sm italic my-10">
              This app is created for relax
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
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
