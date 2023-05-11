import ContactListComponent from './components/ContactListComponent';
import ConversationComponent from './components/ConversationComponent';

function App() {
  
  return (
    <>
     <div className='flex flex-row h-screen w-full bg-[#f8f9fb]'>
      <ContactListComponent/>  
      <ConversationComponent/>
     </div>
    </>
  );
}

export default App;
