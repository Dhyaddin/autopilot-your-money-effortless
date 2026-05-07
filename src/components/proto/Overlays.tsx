import { usePrototype } from "@/lib/prototype";
import { Button } from "./ui";
import { Check, AlertTriangle, LogOut } from "lucide-react";

export function Overlays() {
  const { overlay, setOverlay, go } = usePrototype();
  if (!overlay) return null;
  const close = () => setOverlay(null);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center px-6" style={{ background: "rgba(0,0,0,0.6)" }} onClick={close}>
      <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-[320px]" onClick={(e) => e.stopPropagation()}>
        {overlay === "success" && (
          <>
            <div className="w-16 h-16 rounded-full bg-success mx-auto flex items-center justify-center"><Check size={32} color="white" strokeWidth={3} /></div>
            <h3 className="font-display text-lg text-center mt-4">Goal Created! 🎉</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">Japan Trip goal locked. AutoPilot will auto-save RM 200 monthly.</p>
            <div className="mt-5 space-y-2">
              <Button onClick={() => { close(); go("goalDetail"); }}>View My Goal</Button>
              <button onClick={() => { close(); go("dashboard"); }} className="w-full text-sm text-muted-foreground py-2">Back to Home</button>
            </div>
          </>
        )}
        {overlay === "deleteConfirm" && (
          <>
            <div className="w-16 h-16 rounded-full bg-warning mx-auto flex items-center justify-center"><AlertTriangle size={32} color="white" /></div>
            <h3 className="font-display text-lg text-center mt-4">Cancel This Goal?</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">An early exit fee of RM 20 will be deducted. This action cannot be undone.</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button variant="muted" onClick={close}>Keep Goal</Button>
              <Button variant="danger" onClick={() => { close(); go("goals"); }}>Cancel Goal</Button>
            </div>
          </>
        )}
        {overlay === "logout" && (
          <>
            <div className="w-16 h-16 rounded-full bg-danger mx-auto flex items-center justify-center"><LogOut size={32} color="white" /></div>
            <h3 className="font-display text-lg text-center mt-4">Log Out?</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">You will be returned to the login screen.</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button variant="muted" onClick={close}>Stay</Button>
              <Button variant="danger" onClick={() => { close(); go("login"); }}>Log Out</Button>
            </div>
          </>
        )}
        {overlay === "splitEdit" && (
          <>
            <h3 className="font-display text-lg">Adjust Split</h3>
            <p className="text-sm text-muted-foreground mt-1">Set your auto-split percentages.</p>
            <div className="mt-4 space-y-3">
              {[["Needs","60%","#3B82F6"],["Wants","20%","#F59E0B"],["Save","20%","#10B981"]].map(([n,v,c]) => (
                <div key={n} className="flex items-center justify-between p-3 rounded-xl border border-border">
                  <span className="text-sm" style={{ color: c }}>{n}</span>
                  <input defaultValue={v} className="w-16 bg-transparent text-right text-sm font-bold focus:outline-none" />
                </div>
              ))}
            </div>
            <div className="mt-4"><Button onClick={close}>Save Changes</Button></div>
          </>
        )}
        {overlay === "addExtra" && (
          <>
            <h3 className="font-display text-lg">Add Extra Savings</h3>
            <p className="text-sm text-muted-foreground mt-1">Boost your Japan Trip goal today.</p>
            <input placeholder="RM 0.00" className="w-full h-12 mt-4 px-4 bg-background border border-border rounded-xl text-center font-display text-xl focus:border-primary focus:outline-none" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="muted" onClick={close}>Cancel</Button>
              <Button onClick={close}>Add</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
