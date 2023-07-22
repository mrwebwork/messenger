"use client";

import { Conversation } from "@prisma/client";

interface ConversationListProps {
  initialItems: Conversation[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
}) => {
  return (
    <div>
      <div>conversation list</div>
    </div>
  );
};

export default ConversationList;
