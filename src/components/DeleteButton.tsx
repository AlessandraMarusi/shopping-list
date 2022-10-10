interface ListaProps {
  id: string;
  products: any;
  onDelete: (newProducts: { name: string; quantity: string }[]) => void;
}
//Component only modify the array, any change to localstorage happens in List
const DeleteButton = (props: ListaProps) => {
  const { products, id } = props;

  const prova = [
    {
      name: "wow",
      quantity: "why",
    },
    {
      name: "no",
      quantity: "nooooo",
    },
  ];

  const deleteItem = () => {
    const index = products.findIndex((e: any) => e.name === id);

    if (index > -1) {
      products.splice(index, 1);
      console.log("SPLICING");
      console.log(products);
      props.onDelete(products);
    }
  };

  return (
    <td>
      <button onClick={deleteItem}>Delete</button>
    </td>
  );
};
export default DeleteButton;
