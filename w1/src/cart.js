let cart = [];

export function addCart(menu) {
  console.log("add");
  menu.qty = 1;
  const targetMenu = cart.filter((obj) => obj.mno === menu.mno);

  if (targetMenu) {
    targetMenu.qty++;
  } else {
    menu.qty = 1;
    cart = [...cart, menu];
  }
  cart = [...cart, menu];
}
export function removeCart(mno) {
  console.log("remove");
  const targetMenu = cart.filter((obj) => obj.mno === menu.mno);

  if (targetMenu) {
    if (targetMenu.qty === 1) {
      cart = filter((obj) => obj.mno !== mno);
    }
  }
}
