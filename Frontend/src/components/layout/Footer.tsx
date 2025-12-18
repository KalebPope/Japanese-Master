export default function Footer() {
  return (
    <>
      <div className="w-7xl mx-auto h-100 flex flex-col justify-between items-center py-10">
        <div className="w-7xl grid grid-cols-4 justify-center font-intervariable pt-15">
          <div className="z-10 flex flex-col justify-center items-center">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-nuku1 text-red-500">
                Japanese Master
              </h1>
              <h1 className="text-lg font-intervariable font-extrabold text-red-500">
                © John Doe Inc.
              </h1>
            </div>
          </div>

          <div className="z-10 text-xl text-red-500 flex flex-col justify-center items-center">
            <div className="flex flex-col items-start">
              <h1 className="font-extrabold">Navigation</h1>
              <h1>Signup</h1>
              <h1>Login</h1>
              <h1>Home</h1>
              <h1>Courses</h1>
            </div>
          </div>

          <div className="z-10 text-xl text-red-500 flex flex-col justify-center items-center">
            <div className="flex flex-col items-start">
              <h1 className="font-extrabold">Social</h1>
              <h1>X</h1>
              <h1>Youtube</h1>
              <h1>Instagram</h1>
              <h1>Facebook</h1>
            </div>
          </div>

          <div className="z-10 text-xl text-red-500 flex flex-col items-center">
            <div className="flex flex-col items-start">
              <h1 className="font-extrabold flex">Legal</h1>
              <h1>Privacy Policy</h1>
              <h1>General Info</h1>
              <h1>Terms of Service</h1>
            </div>
          </div>
        </div>

        <div className="z-10 flex gap-20">
          <img src="/icons/twitter.png" className="w-10 h-10" />
          <img src="/icons/youtube.png" className="w-10 h-10" />
          <img src="/icons/instagram.png" className="w-10 h-10" />
          <img src="/icons/facebook.png" className="w-10 h-10" />
        </div>
      </div>
    </>
  );
}
