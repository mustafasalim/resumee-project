function Footer() {
  return (
    <footer className=" w-full h-[339px] bg-[#fafafa]">
      <div className=" flex items-center justify-center text-center text-stone-300 text-[25px] font-extrabold">
        <div className="mt-40">made by @mustafasalim</div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center">
          <a href="https://www.linkedin.com/in/mustafa-salim-562145205/">
            {" "}
            <img
              className="w-[39px]"
              src="https://static.vecteezy.com/system/resources/previews/018/930/584/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
            />
          </a>
        </div>
        <div>
          <div className="w-0.5 h-[31px] bg-red-600"></div>
        </div>
        <div className="mt-1 ml-1">
          <a href="https://github.com/mustafasalim/resumee-project">
            {" "}
            <img
              className="w-[59px] "
              src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
