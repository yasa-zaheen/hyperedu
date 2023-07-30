import Image from "next/image";
import SignUpComponent from "./SignUpComponent";

function page() {
  return (
    <div className="h-screen w-full flex">
      <div className="w-1/3 flex flex-col justify-center items-center">
        <SignUpComponent />
      </div>
      <div className="w-2/3 relative">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/hyperedu-8b477.appspot.com/o/admin%2FFirefly%20Studying%20in%20a%20futuristic%20school%2095266.jpg?alt=media&token=ad95c458-0432-4886-94f2-c4c43659449c"
          fill={true}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default page;
