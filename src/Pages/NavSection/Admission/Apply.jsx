import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";



const Apply = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const subject = form.subject.value;
        const number = form.number.value;
        const address = form.address.value;
        const birth = form.birth.value;

        const addCollege = {
            userName: name,
            userEmail: email,
            photo: photo,
            subject: subject,
            number: number,
            address: address,
            birth: birth
          };

          fetch("http://localhost:5000/college", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addCollege),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                console.log(data);
                }
                Swal.fire(
                "Thank you!",
                "A toy added successfully",
                "success"
                );
            });
        };

  return (
    <div>
      <section className="bg-[#082f49] text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12 mx-2">
              <p className="max-w-xl text-lg text-white">
              Contact us today and experience the advantage of dealing with a company that is fully owned and operates independently from manufacturers and other group controls. Our commitment to independence ensures that we provide unbiased and personalized recommendations tailored to your specific needs. You can trust us to guide you towards the solutions that are truly right for you. Reach out to us now and let's start a conversation about how we can best assist you.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  0181 031 8499
                </a>

                <address className="mt-2 not-italic text-white">
                  3900 Masterpara, Feni, Bangladesh
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white text-black p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form className="space-y-4" onSubmit={handleSubmit} >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                        Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-blue-100 text-black border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-300"
                      id="grid-first-name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                        Subject
                    </label>
                    <input
                      className="appearance-none block w-full bg-blue-100 text-black border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-300 focus:border-blue-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Your subject"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                        Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-blue-100 text-black border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-300"
                      id="grid-first-name"
                      type="email"
                      placeholder="Your Email"
                      defaultValue={user?.email || ""}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                        Contact Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-blue-100 text-black border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-300 focus:border-blue-500"
                      id="grid-last-name"
                      type="number"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                        Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-blue-100 text-black border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-300"
                      id="grid-first-name"
                      type="name"
                      placeholder="Your address"
                      
                      
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                        Date of Birth
                    </label>
                    <input
                      className="appearance-none block w-full bg-blue-100 text-black border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-300"
                      id="grid-last-name"
                      type="date"
                      placeholder="Date of Birth"
                    />
                  </div>
                </div>
                <div className="w-full">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                        Photo URL
                    </label>
                    <input
                      className="appearance-none block w-full bg-blue-100 text-black border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-300 focus:border-blue-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Photo"
                      defaultValue={user?.photoURL || ""}
                    />
                  </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
