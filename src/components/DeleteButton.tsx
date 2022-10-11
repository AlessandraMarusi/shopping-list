interface ListaProps {
  id: string;
  products: any;
  onDelete: (newProducts: { name: string; quantity: string }[]) => void;
}
//Component only modify the array, any change to localstorage happens in List
const DeleteButton = (props: ListaProps) => {
  const { products, id } = props;

  const deleteItem = () => {
    const index = products.findIndex((e: any) => e.name === id);

    if (index > -1) {
      products.splice(index, 1);
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
