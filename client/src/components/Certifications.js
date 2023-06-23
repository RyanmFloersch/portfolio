
function Certifications(props) {

    return (
        <>

            <section className='flex flex-col text-emerald-200 p-14 '>
                <h1 className="mx-auto mb-5 text-lg">Certifications</h1>
              
                <div className="flex sm:flex-row  flex-col items-center">
                    <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=BB57E35E832307DE8DB566614358FC1F5025481FD2F790E4B24D093CBAB8DD91" className="m-5 sm:w-7/12 sm:h-max">
                        <img src="/OCAJSE8.jpg" className=" sm:w-fit sm:h-80" alt="" />
                    </a>

                    <iframe
                        src="https://docs.credentials.rutgers.edu/embed/79f48cf6-bc5d-45d9-bd0b-2dcda759db18"

                        frameborder="0"
                        allowfullscreen
                        className="   sm:visible invisible sm:w-6/12 sm:h-80 w-0 h-0">
                    </iframe>

                    <a href="https://docs.credentials.rutgers.edu/embed/79f48cf6-bc5d-45d9-bd0b-2dcda759db18" className="    ">
                        <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/74664195" className="sm:ivisible sm:w-0 sm:h-0 w-fit h-48 " alt="" />
                    </a>
                </div>

            </section>
        </>
    );



}



export default Certifications;