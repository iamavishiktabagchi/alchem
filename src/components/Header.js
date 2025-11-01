import React from 'react';

function Header() {
  const navItems = ['Home', 'About', 'Events', 'FAQS', 'Schedule', 'Contact US'];

  return (
    <header style={headerStyle.container}>
      <div style={headerStyle.logo}>LOGO</div>
      <nav>
        <ul style={headerStyle.ul}>
          {navItems.map((item) => (
            <li key={item} style={headerStyle.li}>
              <a 
                href={`#${item.toLowerCase()}`} 
                style={{
                  ...headerStyle.a, 
                  // Style 'Home' as active
                  color: item === 'Home' ? '#007bff' : '#000',
                  fontWeight: item === 'Home' ? 'bold' : 'normal',
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Assuming a Share button is on the right, as seen in the screenshot */}
      <button style={headerStyle.shareBtn}>Share</button>
    </header>
  );
}

const headerStyle = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    li: {
        marginLeft: '30px',
    },
    a: {
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s',
    },
    shareBtn: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default Header;