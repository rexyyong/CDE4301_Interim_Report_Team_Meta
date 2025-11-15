// Wait for the HTML page to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // --- NOW we can create the tables ---

  // Table 1
  if (document.getElementById("table-1")) {
    new gridjs.Grid({
      columns: ["Name", "Email", "Phone Number"],
      data: [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
      ],
    }).render(document.getElementById("table-1"));
  }

// --- Table 2: Needs Statements ---
  if (document.getElementById("table-needs-statements")) {
    new gridjs.Grid({
      // 1. Simple columns, as requested
      columns: ["Category", "Need Statement"],
      
      data: [
        [
          // 2. Wrap content in gridjs.html() to render bolding and line breaks
          gridjs.html("<strong>Social interactions</strong>"),
          gridjs.html(`
            <strong>Need for Relatable, Judgment-Free Conversation:</strong> The elderly prioritise relatable conversations and the freedom to talk about their own interests without being "judged or criticised." The enjoyment and relatability of the conversation, even if superficial, are often more important than its depth.<br><br>
            <strong>Need for Consistent, Trust-Based Relationships:</strong> The elderly struggle to build bonds with "transient" volunteers. They need consistent social support, which requires significant time to build trust. This is why "friends may be stronger social support than family," as family may be too tired or busy.<br><br>
            <strong>Need for Validation & Agency:</strong> They require "attention/reciprocation" and a sense of control. A "loss of sense of control" or threats to their "ego" can cause disengagement.<br><br>
            <strong>Need for Diverse & Context-Rich Activities:</strong> The elderly feel “left out" due to a "lack of diversity" in social activities, which become monotonous. They need activities curated around shared context (e.g., "Places, Pets, Plants") to foster easier, more natural interactions.
          `)
        ],
        [
          gridjs.html("<strong>Successful interactions</strong>"),
          gridjs.html(`
            <strong>Need for purpose and agency:</strong> The elderly need a meaningful role in activities where their contributions are necessary, so they can feel useful and capable, and have a sense of ownership.<br><br>
            <strong>Need for grief and transitional support:</strong> The elderly require help to process their grief and adapt to major life changes like loss, so they can find a way to move forward and rediscover a sense of peace or new meaning.
          `)
        ],
        [
          gridjs.html("<strong>Autonomy</strong>"),
          gridjs.html(`
            <strong>Need for secure, low-pressure connection:</strong> The elderly require a low-pressure way to feel connected and confirm their safety, so they and their loved ones can have peace of mind without it becoming an intrusive or dependent relationship.
          `)
        ],
        [
          gridjs.html("<strong>Cognitive stimulation</strong>"),
          gridjs.html(`
            <strong>Need for personalised and intentional cognitive engagement:</strong> Activities must be specifically designed to be stimulating ("Intentionality is Key") and tailored to the individual's unique cognitive abilities and interests, to learn something new every day.<br><br>
            <strong>Need for technology-assisted autonomy:</strong> There is a clear opportunity for technology to act as a "provocateur" that helps seniors independently manage their Instrumental Activities of Daily Living (IADLs) and make supported decisions.
          `)
        ],
        [
          gridjs.html("<strong>Cultural Stigma</strong>"),
          gridjs.html(`
            <strong>Need to bridge intergenerational and cultural communication gaps:</strong> Younger generations and social workers struggle to connect due to differing communication styles (e.g., "western culture" vs. local norms) and generational differences, which can lead to misunderstandings and a reluctance for the elderly to open up.<br><br>
            <strong>Need to overcome the stigma associated with seeking formal support:</strong> Societal norms create a significant barrier, making many seniors reluctant to seek mental health support or engage with social services, as they associate it with a loss of autonomy or social stigma.<br><br>
            <strong>Need for non-traditional engagement models that build shared context:</strong> Standard programs fail to attract "untapped seniors" and "male elderly." There is a need for alternative approaches, like fostering a "Kampong Spirit" or using a "shared AI," that create a natural, shared context (like "current affairs" or a shared "pet") to encourage interaction.
          `)
        ],
        [
          gridjs.html("<strong>Training and support for social workers</strong>"),
          gridjs.html(`
            <strong>Need for streamlined administrative and cognitive support:</strong> Social workers are caught in a conflict between administrative duties like following documentation formats, remembering details for "80 over patients", while also being present with the client. This is worsened by organisational pressure not to write things down during a visit, placing a heavy cognitive load on them to document everything later. This pressure, combined with KPIs, can make interactions feel "robotic" and create friction with the elderly.<br><br>
            <strong>Need for realistic, experiential training:</strong> There is a significant gap between theoretical university education and the practical, high-stress reality of social work. Students and new social workers "know what needs to be done but tend to overthink," often freezing because they lack the hands-on experience to "handle a variety of situations" or manage their "fears." Current AI chatbot training tools are inadequate because they lack real-time verbal interaction and personalisation, failing to mimic the "normal flow" of an unpredictable human conversation.<br><br>
            <strong>Need for in-the-moment decision support:</strong> Beyond just training, social workers need real-time help during stressful encounters. They need "prompts" that can help them regulate their own emotions and the elderly's emotions, allowing them to remain "grounded" and "confident" when "unexpected things occur," rather than feeling "shocked."<br><br>
            <strong>Need for scalable manpower solutions:</strong> There is a persistent "manpower shortage" of both professional social workers (due to staffing ratios) and volunteer befrienders. This scarcity will only get worse as the number of isolated seniors increases, amplifying the pressure on the existing workforce and making it impossible to rely on traditional, time-intensive engagement models alone.
          `)
        ]
      ]
    }).render(document.getElementById("table-needs-statements"));
  }

  // --- Table 3: Befriender at Your Service Results ---
  if (document.getElementById("table-befriender-results")) {
    new gridjs.Grid({
      // 1. Simple columns
      columns: ["Factor", "AI Model", "Elderly 1", "Elderly 2", "Elderly 3 (Chinese Speaking)", "Average"],
      
      data: [
        ["No. of conversation interruptions/drop-offs", "ChatGPT", 11, 9, 13, 11.00],
        ["No. of conversation interruptions/drop-offs", "Gemini", 6, 2, 6, 4.67],
        ["No. of conversation interruptions/drop-offs", "Claude AI", 2, 3, "NA", 2.50],
        ["No. of misunderstandings by AI/user", "ChatGPT", 8, 5, 8, 7.00],
        ["No. of misunderstandings by AI/user", "Gemini", 2, 3, 2, 2.33],
        ["No. of misunderstandings by AI/user", "Claude AI", 0, 1, "NA", 0.50],
        ["Ratio of AI-to-user speaking time", "ChatGPT", 3.21, 3.42, 3.14, 3.26],
        ["Ratio of AI-to-user speaking time", "Gemini", 2.93, 2.34, 2.1, 2.46],
        ["Ratio of AI-to-user speaking time", "Claude AI", 3.23, 2.84, "NA", 3.04],
        ["Number of times user laughed/smiled", "ChatGPT", 2, 3, 2, 2.33],
        ["Number of times user laughed/smiled", "Gemini", 2, 6, 4, 4.00],
        ["Number of times user laughed/smiled", "Claude AI", 4, 4, "NA", 4.00]
      ]
    }).render(document.getElementById("table-befriender-results"));
  }

  // --- Table 5: Appendix B Observations ---
  if (document.getElementById("table-appendix-b")) {
    new gridjs.Grid({
      // 1. Simple columns
      columns: ["Model", "Positive Observations", "Negative Observations"],
      
      data: [
        [
          // 2. Wrap content in gridjs.html() to render bolding and line breaks
          gridjs.html("<strong>Qualitative Observations (ChatGPT)</strong>"),
          gridjs.html(`
            Demonstrated basic conversational politeness and willingness to engage once the ice was broken. 
            Broke the ice well with conversations usually surrounding how the day went for the user, how work 
            was, and usually got the attention of the new user straight away. Seemed like ice-breaking was not 
            too much of an issue
          `),
          gridjs.html(`
            <strong>Topical fixation:</strong> The AI repeatedly returned to a single topic — work and jobs — up 
            to seven times, causing the conversation to become monotonous and disengaging.<br><br>
            <strong>Turn-taking and pacing:</strong> Frequent pauses, overlaps, and interruptions made the 
            exchange choppy. The AI often spoke over the user, disrupting the participant’s train of 
            thought.<br><br>
            <strong>Initiative:</strong> The model rarely initiated or sustained new conversational threads. The 
            participant had to “wait to start talking,” creating an unnatural rhythm where the user carried the 
            flow.<br><br>
            <strong>Engagement:</strong> Missed emotional cues such as humour and enthusiasm. For example, when 
            the participant cheerfully shared about his marathon experiences, the AI responded with a generic 
            “tell me more,” failing to build on his excitement.
          `)
        ],
        [
          gridjs.html("<strong>Qualitative Observations (Gemini)</strong>"),
          gridjs.html(`
            The participant responded better when context was added by relatives(e.g., favourite foods or 
            travel topics). With that context, the AI could maintain a smoother flow and was able to engage the 
            user well. When relatable topics were brought up, the user was even seen to be visibly excited to 
            explore more into his/ her interests.
          `),
          gridjs.html(`
            <strong>Question-driven style:</strong> The AI relied heavily on direct questioning, rarely 
            initiating new threads independently. The conversation felt one-way, with repetitive prompts rather 
            than co-created dialogue.<br><br>
            <strong>Dependence on human context:</strong> The model struggled to infer personal preferences 
            without external input. It required Jonathan to guide the conversation by providing relevant 
            context.<br><br>
            <strong>Bad personalisation:</strong> Questions such as “Any plans to relax?” lacked connection to 
            previous responses. When it attempted personalisation (e.g., suggesting Bangkok markets or trips), 
            the phrasing sounded scripted and overly formal — “like talking to Wikipedia.”
          `)
        ],
        [
          gridjs.html("<strong>Qualitative Observations (Claude)</strong>"),
          gridjs.html(`
            <strong>Empathy and sensitivity:</strong> Demonstrated empathetic pivots (e.g., “That must have been 
            hard”) and responded compassionately to a tough upbringing, which got the elderly to nod and 
            acknowledge<br><br>
            <strong>Contextual memory:</strong> Remembered earlier conversation details and referenced them 
            later, helping the participant feel “heard” and understood. This continuity enhanced emotional 
            connection.
          `),
          gridjs.html(`
            <strong>Emotional fatigue:</strong> Although the AI was empathetic, it overused deep reflective 
            prompts. After about ten exchanges, the participant showed subtle frustration and shorter replies, 
            indicating cognitive or. emotional fatigue.<br><br>
            <strong>Topic fixation:</strong> Stayed too long in one reflective mode — reminiscence and family 
            stories — without balancing with lighter or forward-looking topics.<br><br>
            <strong>Limited topic rotation:</strong> When the participant shifted to practical, everyday talk, 
            Claude remained empathetic but failed to vary tone or direction.
          `)
        ]
      ]
    }).render(document.getElementById("table-appendix-b"));
  }
  
}); // <-- The "wait" command finishes here


class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
