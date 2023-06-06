const Header = () => {
  return (
    <header className="h-20 px-5 flex items-center gap-4 justify-between">
      <section className="flex items-center gap-5">
        <button>
          <img src={"/assets/images/icon-menu.svg"} alt="Menu-icon" />
        </button>
        <button>
          <img src="/assets/images/logo.svg" alt="logo" />
        </button>
      </section>
      <section className="flex items-center gap-5">
        <button>
          <img src="/assets/images/icon-cart.svg" alt="icon-logo" />
        </button>
        <button>
          <img
            src="/assets/images/image-avatar.png"
            alt="avatar"
            className="w-8"
          />
        </button>
        
      </section>
    </header>
  )
}

export default Header
