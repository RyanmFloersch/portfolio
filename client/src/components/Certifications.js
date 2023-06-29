
function Certifications(props) {

    return (

        <section className='flex flex-col justify-center text-emerald-200 md:p-14 p-7 '>
            <h1 className="text-emerald-200 mx-auto my-10 text-5xl">Certifications</h1>


            <div className="flex sm:flex-row flex-col justify-evenly mt-10 items-center rounded ">

                <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=BB57E35E832307DE8DB566614358FC1F5025481FD2F790E4B24D093CBAB8DD91" className="flex justify-center  lg:w-1/4 w-3/4  m-5 hover:bg-emerald-100 rounded transition duration-300 ">
                    <img src="/OCAJSE8.jpg" className=" " alt="" />
                </a>

                <a href="https://docs.credentials.rutgers.edu/embed/79f48cf6-bc5d-45d9-bd0b-2dcda759db18" className="flex justify-center lg:w-1/4 w-1/2 m-5 hover:bg-emerald-100 rounded transition duration-300">
                    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/74664195" className=" " alt="" />
                </a>

            </div>

        </section>

    );



}



export default Certifications;