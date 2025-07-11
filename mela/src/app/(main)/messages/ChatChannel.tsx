// Bismillahirahmanirahim 
// Elhamdulillahi Rabbil Alamin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber ve Lillahi'l-hamd


import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Channel,
  ChannelHeader,
  ChannelHeaderProps,
  MessageInput,
  MessageList,
  Window,
} from "stream-chat-react";

interface ChatChannelProps {
  open: boolean;
  openSidebar: () => void;
}

export default function ChatChannel({ open, openSidebar }: ChatChannelProps) {
  // Mobile: message input always at the bottom
  return (
    <div className={cn("w-full h-full flex flex-col", !open && "hidden")}
         style={{ minHeight: 0 }}>
      <Channel>
        <Window>
          <CustomChannelHeader openSidebar={openSidebar} />
          <div className="flex-1 min-h-0 overflow-y-auto">
            <MessageList />
          </div>
          <div className="sticky bottom-0 bg-background z-10 p-2 border-t">
            <MessageInput />
          </div>
        </Window>
      </Channel>
    </div>
  );
}

interface CustomChannelHeaderProps extends ChannelHeaderProps {
  openSidebar: () => void;
}

function CustomChannelHeader({
  openSidebar,
  ...props
}: CustomChannelHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-full p-2 md:hidden">
        <Button size="icon" variant="ghost" onClick={openSidebar}>
          <Menu className="size-5" />
        </Button>
      </div>
      <ChannelHeader {...props} />
    </div>
  );
}