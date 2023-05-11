import { messagesList } from '../Data';
import SearchInput from './SearchInput';

const ConversationComponent = () => {
  return (
    <div className='flex flex-col h-full bg-gray-100'>
        <div className='flex flex-row bg-gray-200 p-4 items-center gap-2.5'>
          <img className='w-10 h-10 rounded-full' src="/profile/pp1.png" />
          Andre Ticona
        </div>
        <div className='flex flex-col h-full bg-red-200'>
          {messagesList.map((messageData) => (
                <div className={'flex my-1.5 mx-4' +  messageData.senderID === 0 ? 'justify-end': 'justify-start'} key={messageData.id}>
                  <div className={'text-gray-800 text-lg py-2 px-2.5 max-w-xl' +  messageData.senderID === 0 ? 'bg-green-200' : 'bg-white'}>
                    {[messageData.text]} 
                  </div>
                </div>
            ))}
        </div>
        <div className='flex bg-gray-200 p-2 items-center bottom-0'>
          <div className="flex flex-row bg-white rounded-2xl w-full py-5">
            {/* <img className="w-[30px] h-7 opacity-40 cursor-pointer" src={searchIcon} /> */}
            <SearchInput />
          </div>
        </div>
    </div>
  );
};

export default ConversationComponent