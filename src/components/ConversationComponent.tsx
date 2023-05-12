import MessageContainer from './MessageContainer';
import SearchInput from './SearchInput';
import emoji from "../assets/data.svg"

const ConversationComponent = () => {
  return (
    <div className='flex flex-col h-full flex-[0.75] bg-gray-100'>
        <div className='flex flex-row bg-gray-200 p-4 items-center gap-2.5'>
          <img className='w-10 h-10 rounded-full' src="/profile/pp1.png" />
          Julio Fernandez
        </div>
        <MessageContainer />
        <div className='flex bg-gray-200 p-2 items-center bottom-0'>
          <div className="flex flex-row bg-white rounded-2xl w-full py-5">
            <img className="w-[30px] h-7 opacity-40 cursor-pointer pl-2" src={emoji} />
            <SearchInput />
          </div>
        </div>
    </div>
  );
};

export default ConversationComponent