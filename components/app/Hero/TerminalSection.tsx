import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export function TerminalSection() {
  return (
    <Terminal
      startOnView={true}
      className="rounded-md border border-background/10 bg-foreground/10 backdrop-blur-lg shadow-xl"
    >
      <TypingAnimation>&gt; forge init web3-project</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Initializing Foundry project.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Installing forge-std.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Compiling smart contracts.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">✔ Running tests...</AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ All tests passed (4/4).
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Optimizing bytecode.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Broadcasting transactions.
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Network:</span>
        <span className="pl-2">Sepolia Testnet</span>
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Contract:</span>
        <span className="pl-2">SmartWallet.sol</span>
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Contract deployed successfully.
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Address:</span>
        <span className="pl-2 font-mono">0xA7b3...9F2C</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Deployment completed.
      </TypingAnimation>

      <TypingAnimation className="text-muted-foreground">
        Ready to interact with smart contracts.
      </TypingAnimation>
    </Terminal>
  );
}
