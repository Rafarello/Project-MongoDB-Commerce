db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: db.produtos.countDocuments({}),
  },
);

db.resumoProdutos.find(
  { franquia: "McDonalds" },
  { _id: 0 },
);