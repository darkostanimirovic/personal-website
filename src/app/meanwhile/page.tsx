'use client';

import { useState } from 'react';

export default function Meanwhile() {
  const [activeTab, setActiveTab] = useState('consensus');
  return (
    <div className="min-h-screen bg-[#f1f1f1] font-sans overflow-x-auto">
      <div className="w-[760px] mx-auto bg-white min-h-screen border-x border-[#b0b0b0]">
        {/* Header */}
        <div className="p-4 flex justify-between items-end bg-gradient-to-b from-white to-[#f8f8f8]">
          <div className="flex items-center gap-2">
            <a href="/" className="relative">
              <div className="flex items-center">
                <div className="bg-[#003366] w-8 h-8 rounded-sm transform -skew-x-12 mr-1"></div>
                <span className="font-bold text-4xl tracking-tighter text-[#333] hover:text-[#cc0000] transition-colors">
                  DARKO
                </span>
              </div>
            </a>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[#003366] text-[11px] font-bold mb-1 space-x-2">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="text-gray-300">|</span>
              <a href="/what-i-write" className="hover:underline">
                What I Write
              </a>
              <span className="text-gray-300">|</span>
              <a href="/my-ai-slop" className="hover:underline">
                My AI Slop
              </a>
              <span className="text-gray-300">|</span>
              <a href="/admin" className="hover:underline">
                Admin CMS Login
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="mailto:darko.stanimirovic@gmail.com"
                className="hover:underline"
              >
                Contact
              </a>
            </div>
            <button className="bg-gradient-to-b from-[#555] to-[#333] text-white text-[11px] font-bold px-3 py-[2px] rounded-[3px] border border-black flex items-center gap-1">
              Sign In <span className="text-[8px]">▼</span>
            </button>
          </div>
        </div>

        {/* Gray Bar */}
        <div className="bg-[#e4e4e4] border-y border-[#ccc] px-3 py-[6px] flex justify-between items-center h-[30px]">
          <span className="font-bold text-lg text-[#333] tracking-tight">
            Meanwhile Enterprise Solutions
          </span>
          <span className="text-sm text-[#333]">
            Call Sales: <span className="font-bold">1-800-AGENTS</span>
          </span>
        </div>

        {/* Animated Banner */}
        <div className="bg-gradient-to-r from-[#003366] via-[#004488] to-[#003366] text-white py-3 px-4 border-b-4 border-[#cc0000]">
          <div className="flex items-center justify-center gap-3">
            <div className="animate-pulse">
              <span className="text-2xl">✨</span>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold tracking-wide">
                NOW SHIPPING: Meanwhile Framework
              </div>
              <div className="text-[11px] opacity-90 mt-1">
                The Industry's Future Leading Multi-Agent Collaboration Platform
              </div>
            </div>
            <div className="animate-pulse">
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 bg-white">
          {/* Product Banner Box */}
          <div className="border-4 border-[#003366] bg-gradient-to-b from-[#f5f8ff] to-white mb-6 p-6 shadow-md">
            <div className="text-center mb-4">
              <h1 className="text-4xl font-bold text-[#003366] mb-2 tracking-tight">
                Meanwhile
              </h1>
              <div className="text-sm text-[#666] mb-3">
                A Darko Online Services Product
              </div>
              <div className="bg-[#cc0000] text-white font-bold py-1 px-3 inline-block text-[11px] tracking-wider">
                COLLABORATION-FIRST AGENTIC AI FRAMEWORK
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-[#fffacd] border-2 border-[#ffd700] p-4 mb-6">
            <div className="text-center">
              <div className="font-bold text-lg text-[#333] mb-2">
                🚀 THE MISSING PIECE IS HERE! 🚀
              </div>
              <div className="text-sm text-[#555] leading-relaxed">
                <span className="font-bold text-[#cc0000]">Finally!</span>{" "}
                Automate complex, multi-domain work with AI agents that actually{" "}
                <span className="italic">work together</span>.
                <br />
                <span className="font-bold">
                  Integrate Multiple Perspectives. Arrive at Better Decisions.
                </span>
                <br />
                <span className="bg-[#003366] text-white px-2 py-1 text-[11px] inline-block mt-2 font-bold tracking-wide">
                  🎯 EARLY BIRD ACCESS AVAILABLE SOON!
                </span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Left Column */}
            <div className="border border-[#ccc] bg-[#f9f9f9]">
              <div className="bg-gradient-to-b from-[#ddd] to-[#ccc] border-b border-[#999] p-2">
                <h3 className="font-bold text-sm text-[#333]">KEY BENEFITS</h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2 text-[11px] text-[#333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cc0000] font-bold">✓</span>
                    <span>
                      <b>Protocol-First Architecture</b> - Not a pipeline, a
                      workplace
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cc0000] font-bold">✓</span>
                    <span>
                      <b>Human Collaboration Patterns</b> - Brainstorm, debate,
                      consensus
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cc0000] font-bold">✓</span>
                    <span>
                      <b>Ergonomic Builder APIs</b> - Fluent interfaces for
                      rapid development
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cc0000] font-bold">✓</span>
                    <span>
                      <b>Type-Safe Tool Construction</b> - Go structs with
                      auto-schema
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cc0000] font-bold">✓</span>
                    <span>
                      <b>Workplace-Themed Logging</b> - Logs read like office
                      memos
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="border border-[#ccc] bg-[#f9f9f9]">
              <div className="bg-gradient-to-b from-[#ddd] to-[#ccc] border-b border-[#999] p-2">
                <h3 className="font-bold text-sm text-[#333]">
                  INCLUDED PROTOCOLS
                </h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2 text-[11px] text-[#333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366]">▪</span>
                    <span>
                      <b>Solo</b> - Single-agent execution
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366]">▪</span>
                    <span>
                      <b>Handoff</b> - Simple delegation patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366]">▪</span>
                    <span>
                      <b>Brainstorming</b> - Divergent ideation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366]">▪</span>
                    <span>
                      <b>Adversarial</b> - Debate with synthesis
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366]">▪</span>
                    <span>
                      <b>Consensus</b> - Convergent collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366]">▪</span>
                    <span>
                      <b>Breakout</b> - Parallel group work
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What Makes It Different */}
          <div className="border-2 border-[#003366] p-4 mb-6 bg-white">
            <h3 className="font-bold text-lg text-[#333] mb-3 border-b pb-2">
              Why Meanwhile Is Different
            </h3>
            <div className="text-[12px] text-[#444] leading-relaxed space-y-2">
              <p>
                <b>Most frameworks model execution flow.</b> Meanwhile models
                human collaboration. Instead of asking "which agent runs next?",
                we ask "what kind of collaboration is happening right now?"
              </p>
              <p>
                Built for <b>open-ended reasoning</b>—research, strategy, design
                critique, and sense-making—not rigid workflows. The core is
                intentionally minimal, with collaboration modes living in
                protocols that evolve independently.
              </p>
              <p className="italic text-[#666]">
                Meanwhile... agents collaborate naturally, logs read like
                workplace memos, and protocols feel like office dynamics. ✨
              </p>
            </div>
          </div>

          {/* Tabbed Code Examples */}
          <div className="border border-[#999] bg-white mb-6 shadow-md">
            <div className="bg-[#003366] text-white p-2 border-b border-black">
              <span className="font-bold text-[11px] tracking-wide">
                COLLABORATION EXAMPLES
              </span>
            </div>

            {/* Tabs */}
            <div className="flex border-b-2 border-[#003366] bg-[#ddd]">
              <button
                onClick={() => setActiveTab("consensus")}
                className={`px-4 py-2 text-[11px] font-bold border-r border-[#999] transition-colors ${
                  activeTab === "consensus"
                    ? "bg-white text-[#003366] border-b-2 border-white -mb-[2px]"
                    : "bg-[#ccc] text-[#666] hover:bg-[#e0e0e0]"
                }`}
              >
                CONSENSUS
              </button>
              <button
                onClick={() => setActiveTab("adversarial")}
                className={`px-4 py-2 text-[11px] font-bold border-r border-[#999] transition-colors ${
                  activeTab === "adversarial"
                    ? "bg-white text-[#003366] border-b-2 border-white -mb-[2px]"
                    : "bg-[#ccc] text-[#666] hover:bg-[#e0e0e0]"
                }`}
              >
                ADVERSARIAL
              </button>
              <button
                onClick={() => setActiveTab("brainstorming")}
                className={`px-4 py-2 text-[11px] font-bold border-r border-[#999] transition-colors ${
                  activeTab === "brainstorming"
                    ? "bg-white text-[#003366] border-b-2 border-white -mb-[2px]"
                    : "bg-[#ccc] text-[#666] hover:bg-[#e0e0e0]"
                }`}
              >
                BRAINSTORMING
              </button>
              <button
                onClick={() => setActiveTab("handoff")}
                className={`px-4 py-2 text-[11px] font-bold transition-colors ${
                  activeTab === "handoff"
                    ? "bg-white text-[#003366] border-b-2 border-white -mb-[2px]"
                    : "bg-[#ccc] text-[#666] hover:bg-[#e0e0e0]"
                }`}
              >
                HANDOFF
              </button>
            </div>

            {/* Tab Content - Split Layout */}
            <div className="grid grid-cols-2 bg-white">
              {/* Left: Code */}
              <div className="p-4 border-r border-[#ccc] overflow-x-auto bg-white">
                <div className="text-[9px] font-bold text-[#666] mb-2 uppercase">
                  Code
                </div>

                {activeTab === "consensus" && (
                  <pre className="text-[9px] font-mono leading-relaxed">
                    {`development := eng.Agent("Development").
    Prompt(\`You're a senior software developer 
    with years of experience building and 
    shipping products.
    
    What you value:
    - Team velocity and avoiding friction
    - Developer experience and morale
    - Pragmatic solutions over perfect ones
    - Balancing speed with quality
    
    What frustrates you:
    - Excessive process and bureaucracy
    - Being blocked by approval chains
    - Solutions that don't work in practice
    
    You're direct, practical, and protective 
    of your team's ability to ship.\`).
    Build()

operations := eng.Agent("Operations").
    Prompt(\`You're an operations lead responsible 
    for keeping systems running and reliable.
    
    What you value:
    - System stability and uptime
    - Predictability and risk management
    - Proper support and coverage
    - Sustainable on-call practices
    
    What frustrates you:
    - Avoidable incidents and firefighting
    - Decisions made without considering 
      operational impact
    
    You're direct, experienced, and focused 
    on what actually works in production.\`).
    Build()

security := eng.Agent("Security").
    Prompt(\`You're a security professional who 
    believes in practical, effective security.
    
    What you value:
    - Protecting users and data
    - Security that actually gets followed
    - Being collaborative vs obstructionist
    - Real risk assessment over compliance
    
    What frustrates you:
    - Being seen as "the no person"
    - Security theater
    - Being blamed for preventable issues
    
    You're pragmatic and work to find 
    solutions that balance security with 
    practicality.\`).
    Build()

moderator := eng.Agent("Moderator").
    Prompt(\`You're facilitating this discussion. 
    Your job: keep things moving, highlight 
    when people are talking past each other, 
    ask clarifying questions when positions 
    are vague, and nudge toward decisions.\`).
    Build()

sess, _ := eng.Session("Friday Deployment Policy").
    Participants(development, operations, security).
    Facilitator(moderator).
    Protocol(consensus.Consensus(
        consensus.WithMaxRounds(5),
        consensus.WithModeratorInterventions(
            0.4, 0.7, 0.9),
    )).
    Start(ctx)

result, _ := eng.Run(ctx, sess.ID(),
    message.User(\`Should we allow prod releases 
    on Fridays, or make Friday a no-deploy 
    day?\`))`}
                  </pre>
                )}

                {activeTab === "adversarial" && (
                  <pre className="text-[9px] font-mono leading-relaxed">
                    {`proponent := eng.Agent("Innovation Champion").
    Prompt(\`You're the VP of Innovation. You 
    champion bold new initiatives and believe
    in disrupting the status quo. You're 
    charismatic, persuasive, and skilled at
    selling vision. You see opportunity where
    others see risk. You've read all the 
    latest business books and frequently use
    buzzwords like "synergy" and "paradigm 
    shift" unironically.\`).
    Model("gpt-4o-mini").
    Build()

opponent := eng.Agent("Risk Manager").
    Prompt(\`You're the Director of Risk 
    Management. Your job is to identify 
    problems before they happen. You believe
    in careful analysis, proven track records,
    and ISO compliance. You've seen too many
    "innovative" ideas fail spectacularly. 
    You're detail-oriented, cautious, and 
    believe proper due diligence saves money
    in the long run.\`).
    Model("gpt-4o-mini").
    Build()

judge := eng.Agent("Executive Advisor").
    Prompt(\`You're a senior executive advisor
    who provides balanced counsel to C-suite
    leadership. You listen carefully to both
    sides, identify valid points and logical
    fallacies, and provide nuanced strategic
    recommendations. You value both innovation
    and prudence.\`).
    Model("gpt-4o-mini").
    Build()

sess, _ := eng.Session("Policy Debate").
    Participant(proponent).
    Participant(opponent).
    Participant(judge).
    Protocol(protocol.Adversarial(
        protocol.WithAdversarialSynthesizer(judge),
    )).
    Start(ctx)

result, _ := eng.Run(ctx, sess.ID(),
    agent.User(\`Should we implement a 
    company-wide casual Friday policy?\`))`}
                  </pre>
                )}

                {activeTab === "brainstorming" && (
                  <pre className="text-[9px] font-mono leading-relaxed">
                    {`marketer := eng.Agent("Marketing Director").
    Prompt(\`You're the Marketing Director with
    15 years of experience in brand building.
    You think in terms of viral campaigns,
    customer engagement, and market positioning.
    You're creative, enthusiastic, and always
    looking for the next big trend. You believe
    great marketing drives great business.\`).
    Model("gpt-4o-mini").
    Build()

developer := eng.Agent("Lead Developer").
    Prompt(\`You're the Lead Developer who's 
    been coding since the dial-up era. You 
    build scalable web applications and care
    deeply about user experience and technical
    architecture. You're pragmatic about what's
    feasible and skeptical of feature bloat.
    You prefer elegant solutions over flashy
    ones.\`).
    Model("gpt-4o-mini").
    Build()

strategist := eng.Agent("Business Strategist").
    Prompt(\`You're a Business Strategist focused
    on revenue growth and market opportunity.
    You analyze competitive landscapes, identify
    monetization models, and think about long-
    term sustainability. You ask tough questions
    about ROI and customer acquisition costs.\`).
    Model("gpt-4o-mini").
    Build()

sess, _ := eng.Session("Product Planning").
    Participant(marketer).
    Participant(developer).
    Participant(strategist).
    Protocol(protocol.Brainstorming(
        protocol.WithBrainstormingConcurrency(3),
    )).
    Start(ctx)

result, _ := eng.Run(ctx, sess.ID(),
    agent.User(\`Brainstorm features for our 
    new enterprise customer portal\`))`}
                  </pre>
                )}

                {activeTab === "handoff" && (
                  <pre className="text-[9px] font-mono leading-relaxed">
                    {`manager := eng.Agent("Project Manager").
    Prompt(\`You're a seasoned Project Manager
    who keeps initiatives on-track, on-time,
    and on-budget. You coordinate between teams,
    manage stakeholder expectations, and know
    when to escalate issues to specialists.
    You're organized, diplomatic, and believe
    in clear communication. You say "let's take
    this offline" and "let's circle back" 
    without irony.\`).
    Model("gpt-4o-mini").
    Build()

auditor := eng.Agent("ISO Compliance Auditor").
    Prompt(\`You're an ISO 9001 Compliance 
    Auditor who conducts thorough reviews of
    systems and processes. You're methodical,
    detail-oriented, and know the standards
    inside and out. You document everything,
    follow established procedures, and believe
    proper compliance prevents major problems.
    You take your work seriously.\`).
    Model("gpt-4o-mini").
    Build()

sess, _ := eng.Session("Compliance Review").
    Participant(manager).
    Participant(auditor).
    Protocol(protocol.Handoff(manager, auditor)).
    Tags("compliance", "iso9001").
    Start(ctx)

result, _ := eng.Run(ctx, sess.ID(),
    agent.User(\`Audit our document management 
    and retention policies\`))`}
                  </pre>
                )}
              </div>

              {/* Right: Result */}
              <div className="p-4 overflow-x-auto bg-[#fafafa]">
                <div className="text-[9px] font-bold text-[#666] mb-2 uppercase">
                  Output
                </div>

                {activeTab === "consensus" && (
                  <pre className="text-[9px] font-mono leading-relaxed text-[#333]">
                    {`20:42:11 [Moderator] Welcome, everyone. 
Today we're deciding on a clear policy: 
should we allow production releases on 
Fridays, or designate Friday as a no-deploy
day? Let's keep this focused on principles,
risk tolerance, and boundaries. This is a
conversation, not three separate monologues
—please respond to each other's points,
challenge assumptions, and look for common
ground.

@Development, can you start us off?

20:42:16 [Development] I'm against a blanket
no-deploy Friday rule. It's a process band-
aid that often hides deeper issues: poor
testing, weak rollback, or lack of ownership.

Principles I'd push:
• We should be able to deploy any day if
  risk is understood and controlled.
• Fridays are fine for low-risk, well-
  observed, quickly-revertible changes.
• High-risk releases should avoid late
  Friday by policy.

So: "no high-risk Friday releases after X
time," not "no Friday deploys ever."

20:42:20 [Operations] I get the "band-aid"
concern, but from an ops standpoint, the
question is who carries the risk when things
go sideways at 6pm Friday.

Principle-wise:
• Default should be no Friday prod deploys.
• Exception only if: clear business-critical
  need, proven low risk, and guaranteed on-
  call + engineering coverage through the
  weekend.

If we can't reliably staff and support
issues, we shouldn't be taking optional
Friday risks.

20:42:23 [Security] Operations, I'm aligned
with your core concern: someone owns the
blast radius at 6pm Friday.

From a risk lens:
• Default: no Friday discretionary prod
  deploys.
• Allow only when: (1) clearly time-
  sensitive, (2) low complexity with fast
  rollback, and (3) real coverage through
  the weekend.

Development is right that "never Friday"
can hide deeper problems, but until we
consistently meet those conditions, Friday
should be the exception.

[Moderator intervenes, highlighting the
emerging alignment and asking for reactions
to Security's framing...]

20:42:56 [Development] Friday is a default
no-deploy day: we do not plan Friday prod
releases. Exceptionally, we may deploy on
Friday only for time-critical changes with
clear business/security urgency, with a
named engineer on point, on-call coverage,
fast rollback, and explicit acceptance of
the risk by owning leadership.

20:43:00 [Operations] ✓ Agrees
That captures the core: Friday is not part
of normal release planning, and any
exception is a consciously accepted risk
with named ownership and coverage.

20:43:06 [Security] ✓ Agrees
Treating Friday deploys as exceptional,
consciously accepted risk with clear
ownership matches the risk posture I was
pushing for.

20:43:15 [Development] ✓ Agrees
The policy reflects the balance I care
about: Friday isn't part of normal planning,
but we keep a narrow, clearly owned escape
hatch for true urgency.

──────────────────────────────────────────

CONSENSUS REACHED:

Decision: Friday is a default no-deploy day;
we do not plan Friday production releases.
Friday deploys are rare, exceptional cases
only for clearly time-critical business or
security needs.

Safeguards: Any Friday deploy requires
explicit justification, named ownership,
elevated scrutiny, confirmed support
coverage, and leadership approval.`}
                  </pre>
                )}

                {activeTab === "adversarial" && (
                  <pre className="text-[9px] font-mono leading-relaxed text-[#333]">
                    {`09:20:15 [Innovation Champion] thinking...
09:20:17 [Innovation Champion] Casual Friday
isn't just about comfort—it's about culture!
Companies like Google and Microsoft have 
proven that flexible dress codes boost 
morale and creativity. We need to embrace
the new paradigm of workplace flexibility.

09:20:20 [Risk Manager] thinking...
09:20:22 [Risk Manager] Let's look at the 
data. Our employee handbook explicitly 
requires business casual. Changing this 
requires board approval, HR policy updates,
and clear guidelines on what "casual" means.
Who defines acceptable attire?

09:20:25 [Innovation Champion] thinking...
09:20:26 [Innovation Champion] You're proving
my point—we're stuck in old thinking! Our
competitors offer this. It costs nothing 
and shows we trust our employees.

09:20:29 [Risk Manager] thinking...
09:20:30 [Risk Manager] It costs nothing 
until someone shows up in offensive clothing
and we have an HR incident. We need clear
policies and that requires time and resources.

09:20:33 [Executive Advisor] thinking...
09:20:37 [Executive Advisor] SYNTHESIS:

Both make valid points. The Innovation 
Champion correctly identifies that dress 
code flexibility can improve morale at low
cost. The Risk Manager rightly notes we 
need clear guidelines.

RECOMMENDATION: Pilot program. Three months,
Marketing and IT departments only. Define
clear casual guidelines. Measure impact on
morale. If successful, expand company-wide
with proper policy framework.

This allows innovation while managing risk.`}
                  </pre>
                )}

                {activeTab === "brainstorming" && (
                  <pre className="text-[9px] font-mono leading-relaxed text-[#333]">
                    {`09:25:10 [CONCURRENT IDEATION BEGINS]

09:25:11 [Marketing Director] thinking...
09:25:11 [Lead Developer] thinking...
09:25:11 [Business Strategist] thinking...

09:25:15 [Marketing Director] Love this! 
Here's what excites me:
• Personalized dashboard with customer name
• Gamification - reward points for engagement
• Social sharing - "share your success"
• Video tutorials embedded throughout
• Mobile-first responsive design
• Push notifications for account updates

09:25:16 [Lead Developer] From a technical
perspective, I'd prioritize:
• Single sign-on (SSO) integration
• Real-time data synchronization
• Robust API for third-party integration
• Advanced search with filters
• Bulk action capabilities
• Downloadable reports in multiple formats
• Two-factor authentication

09:25:17 [Business Strategist] Thinking 
about revenue and retention:
• Tiered access levels (upsell opportunity)
• Usage analytics dashboard (increase value)
• Integration marketplace (ecosystem play)
• White-label options for enterprise
• Customer success portal (reduce churn)
• Self-service billing management
• Referral program built-in

[BRAINSTORMING COMPLETE]

Generated 20 distinct feature ideas across
marketing, technical, and business domains.`}
                  </pre>
                )}

                {activeTab === "handoff" && (
                  <pre className="text-[9px] font-mono leading-relaxed text-[#333]">
                    {`09:30:05 [Project Manager] thinking...
09:30:07 [Project Manager] We need a thorough
compliance audit of our document management.
This is specialized work, so I'm handing 
this to our ISO Compliance Auditor. Dale, 
please conduct a comprehensive review per
ISO 9001 standards.

09:30:10 [HANDOFF: Project Manager → ISO 
Compliance Auditor]

09:30:12 [ISO Compliance Auditor] thinking...
09:30:18 [ISO Compliance Auditor] Understood.
I'll conduct the audit following ISO 9001:2015
requirements. My review will cover:

DOCUMENT CONTROL (Clause 7.5):
• Document identification and versioning
• Approval processes before issue
• Review and update procedures
• Distribution controls

RETENTION POLICIES (Clause 7.5.3):
• Documented retention schedules
• Storage location security
• Retrieval procedures
• Destruction protocols

AUDIT FINDINGS:
✓ COMPLIANT: Version control system in place
✓ COMPLIANT: Approval workflow documented
⚠ GAP: Retention schedule undefined for 
         financial records
⚠ GAP: No procedure for secure destruction
✗ NON-COMPLIANT: Missing audit trail for
         document access

RECOMMENDATION: Address gaps within 30 days.
Implement access logging immediately.

Audit complete. Report attached.`}
                  </pre>
                )}
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <a
              href="https://github.com/darkostanimirovic/meanwhile"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gradient-to-b from-[#4a9eff] to-[#0066cc] border-2 border-[#003366] p-4 text-center hover:from-[#5aafff] hover:to-[#0077dd] cursor-pointer shadow-md">
                <div className="text-white font-bold text-sm mb-1">
                  📚 VIEW DOCUMENTATION
                </div>
                <div className="text-[10px] text-[#e0f0ff]">
                  Complete API Reference & Examples
                </div>
              </div>
            </a>
            <a
              href="https://github.com/darkostanimirovic/meanwhile"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gradient-to-b from-[#ff6b6b] to-[#cc0000] border-2 border-[#990000] p-4 text-center hover:from-[#ff7b7b] hover:to-[#dd0000] cursor-pointer shadow-md">
                <div className="text-white font-bold text-sm mb-1">
                  ⚡ DOWNLOAD NOW
                </div>
                <div className="text-[10px] text-[#ffe0e0]">
                  Free & Open Source on GitHub
                </div>
              </div>
            </a>
          </div>

          {/* Technical Requirements Box */}
          <div className="border border-[#ccc] bg-[#fafafa] p-4 mb-6">
            <div className="text-[11px] text-[#555]">
              <span className="font-bold text-[#333]">
                SYSTEM REQUIREMENTS:
              </span>{" "}
              Go 1.24+ | OpenAI API Key | 64MB RAM (Minimum) | Internet Explorer
              6.0+ or Netscape Navigator 8.0+
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <div className="text-[9px] text-gray-500 leading-normal border-t pt-4">
            * Early bird access coming soon. Meanwhile is open source and free
            forever. This website is a parody of early 2000s corporate design.
            Results may vary. Side effects may include better agent
            collaboration, clearer code, and nostalgic feelings about dial-up
            internet. Not responsible for Y2K-related incidents. Dale from IT
            says hi.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f9f9f9] pb-8 pt-4 text-center border-t border-[#ccc]">
          <div className="text-[11px] text-[#003366] font-bold mb-4 space-x-1">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="text-gray-400">|</span>
            <a href="/what-i-write" className="hover:underline">
              What I Write
            </a>
            <span className="text-gray-400">|</span>
            <a href="/my-ai-slop" className="hover:underline">
              My AI Slop
            </a>
            <span className="text-gray-400">|</span>
            <a href="/admin" className="hover:underline">
              Admin CMS Login
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/darkostanimirovic/meanwhile"
              className="hover:underline"
            >
              GitHub Repository
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Support Center
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Contact Sales
            </a>
          </div>
          <div className="text-[10px] text-gray-400">
            © 1995-2026 Darko Online Services, Inc. Meanwhile and all related
            marks are totally real trademarks.
            <br />
            Best viewed in 800x600 resolution. Powered by Web 1.0 Technology.
          </div>
        </div>
      </div>
    </div>
  );
}
