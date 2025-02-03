function solution(enroll, referral, seller, amount) {
  const tree = new Map([["-", {ref: "", profit: 0}]]);

  enroll.forEach((name, i) => {
    tree.set(name, {ref: referral[i], profit: 0});
  });

  seller.forEach((name, i) => {
    let curr = name;
    let profit = amount[i] * 100;

    while (curr && profit > 0) {
      let charge = Math.floor(profit * 0.1);
      tree.get(curr).profit += profit - charge;
      curr = tree.get(curr).ref;
      profit = charge;
    }
  });

  return enroll.map((name) => tree.get(name).profit);
}
