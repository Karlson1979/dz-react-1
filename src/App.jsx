import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./components/transactions.json";

function App() {
  return (
    <>
      <FriendList />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
