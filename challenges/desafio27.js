db.produtos.countDocuments(
  {
    nome: {
      $regex: /MC/i,
    },
  },
);