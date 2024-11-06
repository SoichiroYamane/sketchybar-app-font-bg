import React from 'react';
export const Line = props => (
  <svg viewBox="0 0 20 20"  {...props} className={`sketchybar-app-font-bg ${props.className ? props.className : ''}`}><path d="m17.269.051.042-.004c1.441-.102 2.933-.021 4.381-.02l8.395.003L56.302.029l18.25-.002 5.2-.002c1.686.001 3.36-.041 5.03.232A18.84 18.84 0 0 1 86.66.67a18.837 18.837 0 0 1 1.223.386c.202.071.402.146.601.225.199.079.396.161.592.246a19.155 19.155 0 0 1 1.719.863 18.157 18.157 0 0 1 5.275 4.553 19.001 19.001 0 0 1 .799 1.096 18.851 18.851 0 0 1 1.142 1.949 16.77 16.77 0 0 1 .735 1.651 18.138 18.138 0 0 1 1.209 5.725c.079 1.648.022 3.32.021 4.972l-.002 9.069v27.946l.001 16.077.001 4.569c0 1.662.027 3.311-.261 4.955a19.129 19.129 0 0 1-.264 1.244 18.553 18.553 0 0 1-.35 1.223 20.152 20.152 0 0 1-.684 1.779 18.919 18.919 0 0 1-.869 1.698 16.69 16.69 0 0 1-.676 1.077 18.651 18.651 0 0 1-1.152 1.519c-.137.162-.276.321-.419.478a15.337 15.337 0 0 1-.607.642 18.323 18.323 0 0 1-2.719 2.249 21.307 21.307 0 0 1-.745.476 20.975 20.975 0 0 1-.766.439 20.866 20.866 0 0 1-.787.402 18.318 18.318 0 0 1-5.921 1.683 15.973 15.973 0 0 1-.88.072c-.052.006-.105.01-.157.014-1.535.1-3.115.028-4.656.027l-8.535-.002-26.61.001-17.643.001-5.051.002c-1.708 0-3.397.033-5.089-.251a18.003 18.003 0 0 1-8.919-4.258 18.927 18.927 0 0 1-.971-.919 18.586 18.586 0 0 1-1.184-1.33 15.719 15.719 0 0 1-.542-.707 14.961 14.961 0 0 1-.507-.733 14.859 14.859 0 0 1-.24-.375 18.406 18.406 0 0 1-2-4.457 19.479 19.479 0 0 1-.499-2.17 16.086 16.086 0 0 1-.124-.882 16.2 16.2 0 0 1-.082-.887c-.105-1.67-.043-3.373-.043-5.048l.001-8.613.001-26.928-.002-17.315v-4.947c.001-1.664-.034-3.316.239-4.964a16.561 16.561 0 0 1 .251-1.239c.049-.205.101-.409.158-.612a17.516 17.516 0 0 1 .842-2.383 19.88 19.88 0 0 1 .545-1.141 16.557 16.557 0 0 1 .623-1.101c.111-.179.224-.357.34-.533a18.478 18.478 0 0 1 4.928-4.99 16.404 16.404 0 0 1 .76-.491c.129-.079.258-.156.389-.231a15.322 15.322 0 0 1 .795-.434 19.054 19.054 0 0 1 2.072-.906 21.562 21.562 0 0 1 .858-.289 21.595 21.595 0 0 1 .871-.246 21.69 21.69 0 0 1 .882-.203 17.393 17.393 0 0 1 .892-.158 16.64 16.64 0 0 1 .898-.114 16.78 16.78 0 0 1 .902-.07Zm30.785 15.814c-10.113.4-20.27 4.407-27.209 11.908-4.589 4.961-7.434 11.584-7.15 18.403.303 7.271 3.724 13.815 9.049 18.696 4.938 4.527 11.116 7.475 17.628 8.922 1.571.349 4.425.582 5.707 1.279 1.031.561 1.377 1.583 1.422 2.685.058 1.422-.267 2.844-.504 4.238-.101.595-.235 1.212-.211 1.819.015.362.104.75.375 1.009.266.254.627.323.983.308.808-.033 1.614-.397 2.343-.717 2.882-1.426 5.623-3.154 8.317-4.904 7.44-4.829 16.004-11.118 21.524-18.018 2.084-2.604 3.801-5.481 4.871-8.649a26.703 26.703 0 0 0 .345-1.138 28.576 28.576 0 0 0 .288-1.154 22.349 22.349 0 0 0 .404-2.343 23.71 23.71 0 0 0 .178-2.966 23.609 23.609 0 0 0-.12-2.375c-.02-.197-.042-.394-.066-.591a29.735 29.735 0 0 0-.081-.589 29.874 29.874 0 0 0-.206-1.171 23.075 23.075 0 0 0-.415-1.734 26.81 26.81 0 0 0-.348-1.138 23.32 23.32 0 0 0-1.109-2.756 26.411 26.411 0 0 0-.263-.534c-3.961-7.976-11.675-13.566-19.989-16.342a42.542 42.542 0 0 0-3.85-1.08 43.277 43.277 0 0 0-3.932-.721 44.215 44.215 0 0 0-3.983-.357 44.403 44.403 0 0 0-3.998.01Z" fillRule="evenodd" />,
<path d="M40.522 37.692c.755-.014 2.567-.225 3.134.284.24 1.025.102 2.311.102 3.37l.002 5.677v4.265c0 .702.059 1.457-.012 2.151-.032.306-.203.442-.428.625-.608.06-1.246.041-1.858.043-.459.002-.961.013-1.308-.331-.077-.209-.09-.421-.097-.642-.098-3.274.011-6.579.003-9.856l-.01-3.385c-.002-.549-.075-1.213.037-1.745.049-.234.25-.336.435-.456Zm-13.03-.004c.619-.009 2.579-.179 3.015.197.127.11.138.595.147.771.073 1.336.012 2.71.012 4.051l-.009 7.679c1.496.051 3.009.01 4.507.008.649-.001 1.326-.045 1.971.019.241.023.469.033.621.243.19.263.19 2.433.117 2.806-.062.316-.196.438-.459.609-1.921.119-3.911.022-5.84.022-1.129 0-2.877.113-3.92-.046-.18-.027-.434-.047-.536-.216-.125-.206-.136-.577-.144-.818-.038-1.189-.053-14.662.051-14.921.089-.22.27-.303.467-.404Zm35.691.001c1.748-.059 3.516-.006 5.267-.009 1.368-.002 2.778-.076 4.141.001.229.012.554.042.751.162.179.111.227.264.259.464.072.446.115 2.507-.169 2.839-.109.129-.27.187-.432.213-.642.104-1.398.022-2.055.022a383.923 383.923 0 0 0-4.553.007c.007.879.007 1.759.001 2.638 1.241.001 6.248-.171 6.987.182.145.159.195.298.227.507.062.405.091 2.504-.171 2.788-.141.153-.257.171-.457.198-.687.095-1.446.036-2.141.036l-4.117-.005a.663.663 0 0 0-.296.042c-.129.561-.032 1.981-.034 2.615 1.547.037 3.105.011 4.652.006.593-.002 1.258-.071 1.843-.007.18.019.371.086.506.208.134.121.2.299.23.473.066.375.019 1.731.005 2.189-.007.246-.066.486-.258.654-.174.152-.462.158-.686.172-1.779.111-3.667.011-5.456.003-1.162-.005-2.377.091-3.531.014-.263-.017-.728-.07-.884-.323-.104-.166-.097-.461-.104-.655-.039-1.197-.008-2.404-.007-3.603l.011-7.04c.002-.986-.155-3.465.041-4.287.063-.267.21-.366.43-.504Zm-16.617.002c.824-.014 1.742-.105 2.555-.002.24.031.375.082.544.258.739.767 1.364 1.796 1.998 2.659 1.655 2.256 3.253 4.599 4.996 6.785l-.001-6.174c0-.919-.076-1.9 0-2.814.015-.183.056-.377.182-.518.316-.352 1.929-.232 2.404-.216.246.008.799.031.955.252.142.199.14.589.151.833.044.983.008 1.985.008 2.97l-.003 5.671a244.82 244.82 0 0 0-.003 3.428c.007.795.063 1.621.001 2.413-.029.38-.089.554-.384.804-.761.176-2.151.072-2.958.026-.665-.563-1.76-2.254-2.329-3.021-1.629-2.195-3.278-4.378-4.878-6.594.027 1.639.01 3.281.012 4.921.001 1.201.032 2.412-.005 3.613-.008.262.009.699-.198.88-.431.378-1.149.216-1.67.217-.331.001-.669.041-.998.02-.309-.02-.524-.088-.734-.318a3.056 3.056 0 0 1-.102-.779c-.088-3.317.004-6.659 0-9.978l-.009-3.195c-.001-.518-.056-1.115.031-1.624.044-.26.236-.374.435-.517Z" fillRule="evenodd" /></svg>
);