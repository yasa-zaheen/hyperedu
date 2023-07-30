import Image from "next/image";
import SignInComponent from "./SignInComponent";

function page() {
  return (
    <div className="h-screen w-full flex">
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
        <SignInComponent />
      </div>
      <div className="hidden md:block w-2/3 relative">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/hyperedu-8b477.appspot.com/o/admin%2FAuthentication.jpg?alt=media&token=e2c47e8b-4aa7-4878-9cd2-715309261d1e"
          fill={true}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default page;
