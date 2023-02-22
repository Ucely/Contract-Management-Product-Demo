import { getURLParams } from '../../utils/parseUrl';

import OPTIONS from '../../OPTIONS';

import Card from '../../components/Card/index';

// const Details = () => {
//   const { firstClass, secondClass } = useContext(NodeContext);
//   console.log('firstClass', firstClass, 'secondClass', secondClass);
//   const { children } = OPTIONS[firstClass];
//   const { URL } = children[secondClass];
//   return (
//     <div style={{ height: '100vh' }}>
//       <div
//         className="mt-4 position-sticky top-0 d-none d-md-block color-bg-default width-full border-bottom
//       color-border-muted detail-header"
//         style={{
//           height: '10vh',
//           position: 'absolute',
//           zIndex: 6,
//           background: 'white',
//           width: '100%',
//         }}
//       >
//         这里logo <br />
//         今承达合同管理演示演示明细
//       </div>
//       <iframe
//         id="detail-iframe"
//         key={firstClass * 10 + secondClass}
//         title="title"
//         height="100%"
//         width="100%"
//         src={URL}
//         frameborder="0"
//       />
//       <Island />
//     </div>
//   );
// };

const Details = () => {
  const paramObj = getURLParams(document.URL);
  const { firstClass, secondClass } = paramObj;
  const first = parseInt(firstClass),
    second = parseInt(secondClass);
  const { children } = OPTIONS[first];
  console.log(children);

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <a
              className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              href="/"
            >
              <img src="./img/jincengda.png" alt="" style={{ width: '50%' }} />
            </a>
            <div className="flex">
              <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
                <button
                  type="button"
                  className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Navigation</span>
                  <svg width="24" height="24">
                    <path
                      d="M5 6h14M5 12h14M5 18h14"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>
                <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                  <li className="flex items-center">
                    Backgrounds
                    <svg
                      width="3"
                      height="6"
                      aria-hidden="true"
                      className="mx-3 overflow-visible text-slate-400"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </li>
                  <li className="font-semibold text-slate-900 truncate dark:text-slate-200">
                    Background Color
                  </li>
                </ol>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/docs/installation"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/?ref=top"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      Components
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/showcase"
                    >
                      Showcase
                      <span className="ml-2 font-medium text-xs leading-5 rounded-full text-sky-600 bg-sky-400/10 px-2 py-0.5 dark:text-sky-400">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <label
                  className="sr-only"
                  id="headlessui-listbox-label-8"
                  data-headlessui-state=""
                >
                  Theme
                </label>
                <button
                  type="button"
                  id="headlessui-listbox-button-9"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-headlessui-state=""
                  aria-labelledby="headlessui-listbox-label-8 headlessui-listbox-button-9"
                >
                  <span className="dark:hidden">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        className="stroke-slate-400 dark:stroke-slate-500"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        className="stroke-slate-400 dark:stroke-slate-500"
                      ></path>
                    </svg>
                  </span>
                  <span className="hidden dark:inline">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        className="fill-transparent"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        className="fill-slate-400 dark:fill-slate-500"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        className="fill-slate-400 dark:fill-slate-500"
                      ></path>
                    </svg>
                  </span>
                </button>
                <a
                  href="https://github.com/tailwindlabs/tailwindcss"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Tailwind CSS on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="ml-2 -my-1 lg:hidden">
              <button
                type="button"
                className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Navigation</span>
                <svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
        <div class="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
          <div class="space-y-4 mt-3">
            {children.map((info) => (
              <Card info={info} />
            ))}
            <Card />
            <button class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
              <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                {/* <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
                  className="w-7 h-7 mr-2 rounded-full"
                  alt=""
                /> */}
                <span>绿地集团采购合同</span>
              </div>
              <div class="flex items-center w-full">
                <div class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
                  已归档
                </div>
                <div class="ml-auto text-xs text-gray-500">￥1,902.00</div>
              </div>
            </button>
            <button class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
              <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                {/* <img
              src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512"
              class="w-7 h-7 mr-2 rounded-full"
              alt="profile"
            /> */}
                海尔智家销售合同
              </div>
              <div class="flex items-center w-full">
                <div class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">
                  履行中
                </div>
                <div class="ml-auto text-xs text-gray-500">￥2,794.00</div>
              </div>
            </button>
            <button class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
              <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                {/* <img
              src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              class="w-7 h-7 mr-2 rounded-full"
              alt="profile"
            /> */}
                蒙牛集团合作协议
              </div>
              <div class="flex items-center w-full">
                <div class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md">
                  合作协议
                </div>
                <div class="ml-auto text-xs text-gray-400">￥0.00</div>
              </div>
            </button>
            <button class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
              <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                {/* <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              class="w-7 h-7 mr-2 rounded-full"
              alt="profile"
            /> */}
                Jane Cooper
              </div>
              <div class="flex items-center w-full">
                <div class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
                  已中止
                </div>
                <div class="ml-auto text-xs text-gray-500">￥762.00</div>
              </div>
            </button>
            <button class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
              <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                {/* <img
              src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab"
              class="w-7 h-7 mr-2 rounded-full"
              alt="profile"
            /> */}
                Ronald Richards
              </div>
              <div class="flex items-center w-full">
                <div class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">
                  待续签
                </div>
                <div class="ml-auto text-xs text-gray-400">$0.00</div>
              </div>
            </button>
          </div>
        </div>
        <div className="space-y-10 mt-3" style={{ width: '100%' }}>
          <iframe
            src="https://weapp.eteams.cn/ebdapp/view/825551168963428356"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Details;
