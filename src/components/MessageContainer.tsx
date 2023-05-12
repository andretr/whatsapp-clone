import { messagesList } from '../Data';

function MessageContainer() {
  return (
    <div className='flex flex-col h-full bg-[#e5ddd6]'>
          {messagesList.map((messageData) => (
                
                // <div className={'flex mx-4 my-[5px]' +  messageData.senderID === 0 ? 'justify-end': 'justify-start'} key={messageData.id}>
                <div className={`flex mx-4 my-[5px]' ${messageData.senderID === 0 ? 'justify-end': 'justify-start'}`} key={messageData.id}>
                  <div className={`text-gray-800 text-lg py-2 px-2.5 max-w-xl' ${messageData.senderID === 0 ? 'bg-green-200' : 'bg-white'}`}>
                    {[messageData.text]} 
                  </div>
                </div>
            ))}
        </div>
  )
}

export default MessageContainer