import ContactListComponent from './components/ContactListComponent';
import ConversationComponent from './components/ConversationComponent';

function App() {
  
  return (
    <>
     <div className='flex flex-row h-screen w-full bg-[#183b81]'>
      <ContactListComponent/>  
      <ConversationComponent/>
     </div>
    </>
  );
}

export default App;
