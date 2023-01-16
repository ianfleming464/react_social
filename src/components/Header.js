function Header({ user, setUser }) {
  return (
    <>
      Welcome, {user}!<button onClick={() => setUser('')}>Log out</button>
    </>
  );
}

export default Header;
