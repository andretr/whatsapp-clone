import { contactList } from "../Data";
import profilephoto from "../assets/profile/profilephoto.jpeg";
import SearchContainer from './SearchContainer'

const ContactComponent =(props) => {
    const { userData } = props;
    return (
        <div className='flex flex-row px-3 py-4 cursor-pointer bg-white border-b-2 border-solid border-b-[#f2f2f2]'>
            <img className='w-9 h-9 rounded-full' src={userData.profilePic} />
            <div className='flex flex-col w-full my-0 mx-5'>
                <span className='w-full text-base text-black'>{userData.name}</span>
                <span className='w-1/5 text-sm mt-1 text-[#000000cc]'>Hello</span>
            </div>
            <span className='w-1/5 text-sm mt-1 text-[#000000cc]'>10:04 PM</span>
        </div>
    );
};

const ContactListComponent = () => {

    return (
      <div className="flex flex-col h-full w-full flex-[0.25]">
        <div className="flex flex-row bg-[#ededed] p-4">
          <img className="w-10 h-10 rounded-full" src={profilephoto} />
        </div>
        <div className="flex flex-row bg-[#f6f6f6] p-2.5">
          <SearchContainer />
        </div>
        {contactList.map((userData) => (
          <ContactComponent userData={userData} key={userData.id} />
        ))}
      </div>
    );
};

export default ContactListComponent;

 
