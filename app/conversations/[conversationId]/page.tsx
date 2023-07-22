import exp from "constants";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  return (
    <div>
      <div>conversation id</div>
    </div>
  );
};

export default ConversationId;
