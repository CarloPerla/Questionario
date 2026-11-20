const quizData = [
  {
    "question": "Andrebbe introdotta una tassa patrimoniale sulle grandi ricchezze?",
    "options": [
      {
        "text": "No, il governo deve concentrarsi sull’evasione fiscale, invece di inventare nuove tasse per i cittadini onesti.",
        "axes": { "Eco": 50 },
        "ideologies": ["Centro"]
      },
      {
        "text": "No, gli italiani affogano già in tasse estreme, e una Patrimoniale è un furto legalizzato che punisce i risparmiatori di una vita.",
        "axes": { "Eco": 95 },
        "ideologies": ["Destra regionalista", "Estrema destra"]
      },
      {
        "text": "No, la storia dimostra che le tasse patrimoniali falliscono perché i grandi capitali fuggono verso i paradisi fiscali.",
        "axes": { "Eco": 60 },
        "ideologies": ["Destra nazionalista", "Centro destra"]
      },
      {
        "text": "Sì, ma colpendo rigorosamente le grandi eredità e gli imperi immobiliari, proteggendo i risparmi di una vita.",
        "axes": { "Eco": 35 },
        "ideologies": ["Centro sinistra", "Sinistra"]
      },
      {
        "text": "Sì, tassiamo gli ultra-ricchi per salvare il nostro stato sociale invece di dissanguare la classe lavoratrice.",
        "axes": { "Eco": 5 },
        "ideologies": ["Estrema sinistra"]
      }
    ]
  },
  {
    "question": "Il mercato dovrebbe essere lasciato il più possibile libero di autoregolarsi, limitando l'intervento dello Stato?",
    "options": [
      {
        "text": "Più libero il mercato, più libere le persone.",
        "axes": { "Eco": 100 },
        "ideologies": ["Destra"]
      },
      {
        "text": "Lo Stato dovrebbe intervenire solo per far rispettare le regole (concorrenza, monopoli).",
        "axes": { "Eco": 80 },
        "ideologies": ["Centro destra"]
      },
      {
        "text": "Dipende dal settore: mercato e Stato dovrebbero intervenire ciascuno dove risulta più efficace.",
        "axes": { "Eco": 50 },
        "ideologies": ["Centro"]
      },
      {
        "text": "Lo Stato dovrebbe regolamentare attivamente il mercato per tutelare i lavoratori, i consumatori e l’interesse collettivo.",
        "axes": { "Eco": 25 },
        "ideologies": ["Sinistra", "Centro sinistra"]
      },
      {
        "text": "L’economia dovrebbe essere guidata principalmente da obiettivi sociali e collettivi, anche attraverso un forte controllo pubblico della produzione.",
        "axes": { "Eco": 5 },
        "ideologies": ["Estrema sinistra"]
      }
    ]
  },
  {
    "question": "Sostieni un programma di reddito di base universale?",
    "options": [
      {
        "text": "Sì, lo Stato deve garantire un reddito minimo a chi non trova lavoro.",
        "axes": { "Eco": 5 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Sì, tutti dovrebbero ricevere un reddito per coprire le necessità di base, inclusi cibo e alloggio.",
        "axes": { "Eco": 25 },
        "ideologies": ["Sinistra", "Centro sinistra"]
      },
      {
        "text": "No, questo incoraggerà le persone a non lavorare e danneggerà la crescita economica.",
        "axes": { "Eco": 75 },
        "ideologies": ["Centro", "Centro destra"]
      },
      {
        "text": "No categorico.",
        "axes": { "Eco": 95 },
        "ideologies": ["Destra", "Estrema destra"]
      }
    ]
  },
  {
    "question": "Dovrebbe essere introdotto un salario minimo legale obbligatorio per tutti i lavoratori?",
    "options": [
      {
        "text": "Sì, e adeguarlo ogni anno in base all'inflazione.",
        "axes": { "Eco": 20 },
        "ideologies": ["Sinistra", "Centro sinistra"]
      },
      {
        "text": "Sì, bisogna garantire un reddito dignitoso ai lavoratori non coperti dai contratti sindacali.",
        "axes": { "Eco": 5 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "No, una legge rigida indebolirebbe i sindacati e spingerebbe le piccole imprese verso il lavoro nero.",
        "axes": { "Eco": 80 },
        "ideologies": ["Centro destra", "Destra nazionalista"]
      },
      {
        "text": "No, i salari devono essere stabiliti dalla contrattazione collettiva tra sindacati e imprese, non dallo Stato.",
        "axes": { "Eco": 70 },
        "ideologies": ["Centro", "Destra regionalista"]
      },
      {
        "text": "No, la maggior parte dei lavori a salario minimo serve a sviluppare esperienza, non a mantenere una famiglia.",
        "axes": { "Eco": 90 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Il governo dovrebbe imporre il passaggio alla settimana lavorativa di quattro giorni?",
    "options": [
      {
        "text": "Sì, e obbligare le aziende a pagare lo stesso salario di 40 ore per 32.",
        "axes": { "Eco": 10 },
        "ideologies": ["Estrema sinistra", "Sinistra"]
      },
      {
        "text": "Sì, gli studi dimostrano che riduce il burnout e aumenta la produttività.",
        "axes": { "Eco": 25 },
        "ideologies": ["Centro sinistra"]
      },
      {
        "text": "No, il libero mercato dovrebbe dettare gli orari, poiché un obbligo rovinerebbe le piccole imprese.",
        "axes": { "Eco": 50 },
        "ideologies": ["Centro"]
      },
      {
        "text": "No, perdere un’intera giornata di lavoro distruggerà la produttività nazionale e annienterà la nostra competitività economica globale.",
        "axes": { "Eco": 80 },
        "ideologies": ["Destra", "Centro destra", "Estrema destra"]
      }
    ]
  },
  {
    "question": "I datori di lavoro dovrebbero essere obbligati a pagare uomini e donne lo stesso stipendio per lo stesso lavoro? (società)",
    "options": [
      {
        "text": "No, questo è irrilevante perché il divario salariale di genere è un mito.",
        "axes": { "Eco": 80, "Società": 100 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "Si.",
        "axes": { "Eco": 25, "Società": 20 },
        "ideologies": ["Centro sinistra"]
      },
      {
        "text": "Sì, e le aziende dovrebbero essere obbligate a pubblicare le fasce salariali per ogni posizione.",
        "axes": { "Eco": 10, "Società": 0 },
        "ideologies": ["Estrema sinistra", "Sinistra"]
      },
      {
        "text": "No, il governo non dovrebbe mai determinare quanto un’azienda privata debba pagare i dipendenti.",
        "axes": { "Eco": 60, "Società": 65 },
        "ideologies": ["Centro destra"]
      },
      {
        "text": "No, ci sono troppe altre variabili come istruzione, esperienza e anzianità che determinano uno stipendio equo.",
        "axes": { "Eco": 90, "Società": 75 },
        "ideologies": ["Destra"]
      }
    ]
  },
  {
    "question": "L'età pensionabile dovrebbe essere ridotta, anche se ciò comportasse un aumento della spesa pubblica?",
    "options": [
      {
        "text": "Sì, anche a costo di aumentare la spesa pubblica.",
        "axes": { "Eco": 5, "Società": 10 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Sì, chi svolge lavori fisicamente usuranti merita di andare in pensione con dignità.",
        "axes": { "Eco": 30, "Società": 20 },
        "ideologies": ["Sinistra", "Centro sinistra", "Destra", "Centro destra"]
      },
      {
        "text": "No, il sistema è matematicamente insolvente se non lavoriamo più a lungo.",
        "axes": { "Eco": 60, "Società": 65 },
        "ideologies": ["Centro"]
      },
      {
        "text": "No, l’età pensionabile deve essere aumentata: morire lavorando per il proprio paese dovrebbe essere l’aspirazione di tutti.",
        "axes": { "Eco": 90, "Società": 90 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Il lavoro da remoto dovrebbe essere riconosciuto come un diritto per tutte le professioni in cui è concretamente possibile? (società, autorità)",
    "options": [
      {
        "text": "Sì, ogni lavoratore dovrebbe poter scegliere liberamente da dove lavorare, senza interferenze del datore di lavoro.",
        "axes": { "Eco": 5, "Società": 10, "Autorità": 0 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Sì, il lavoro da remoto dovrebbe essere un diritto garantito dalla legge; dobbiamo pur poter giocare a Minecraft in pace.",
        "axes": { "Eco": 20, "Società": 15, "Autorità": 10 },
        "ideologies": ["Sinistra", "Centro sinistra"]
      },
      {
        "text": "No, il datore di lavoro dovrebbe poter decidere quale modalità sia più efficace.",
        "axes": { "Eco": 50, "Società": 60, "Autorità": 50 },
        "ideologies": ["Centro"]
      },
      {
        "text": "No, il lavoro in presenza favorisce la collaborazione, la disciplina e il controllo dei dipendenti.",
        "axes": { "Eco": 65, "Società": 80, "Autorità": 85 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "No, le aziende devono avere piena libertà di stabilire dove e come i propri dipendenti lavorano.",
        "axes": { "Eco": 80, "Società": 70, "Autorità": 65 },
        "ideologies": ["Centro destra", "Destra"]
      }
    ]
  },
  {
    "question": "L’abitazione è un diritto? (anche società)",
    "options": [
      {
        "text": "Sì, nessuno dovrebbe possedere dieci appartamenti mentre delle famiglie dormono in auto. Lo Stato dovrebbe limitare il numero di immobili che una singola persona o società può possedere.",
        "axes": { "Eco": 5, "Società": 5 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Sì, ma lo Stato dovrebbe intervenire soprattutto per aiutare le famiglie in difficoltà ad accedere al mercato immobiliare.",
        "axes": { "Eco": 20, "Società": 15 },
        "ideologies": ["Sinistra", "Centro sinistra"]
      },
      {
        "text": "Sì, ma il modo migliore per garantire questo diritto è favorire la costruzione di nuove abitazioni e aumentare l'offerta.",
        "axes": { "Eco": 50, "Società": 30 },
        "ideologies": ["Centro"]
      },
      {
        "text": "No, l’abitazione è un bene importante, ma non un diritto che lo Stato deve garantire a tutti.",
        "axes": { "Eco": 65, "Società": 70 },
        "ideologies": ["Centro destra"]
      },
      {
        "text": "No, la casa è una proprietà privata e il suo acquisto o affitto deve dipendere principalmente dalle possibilità economiche individuali.",
        "axes": { "Eco": 95, "Società": 90 },
        "ideologies": ["Destra", "Estrema destra"]
      }
    ]
  },
  {
    "question": "Il governo dovrebbe incentivare la costruzione di alloggi a prezzi accessibili? (anche società)",
    "options": [
      {
        "text": "Sì, la casa è un diritto fondamentale che dovrebbe essere accessibile a tutti",
        "axes": { "Eco": 10, "Società": 10 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Sì, e inoltre vietare a investitori aziendali e stranieri di acquistare immobili residenziali",
        "axes": { "Eco": 5, "Società": 85 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "Sì",
        "axes": { "Eco": 30, "Società": 40 },
        "ideologies": ["Sinistra", "Centro sinistra", "Centro", "Centro destra", "Destra"]
      },
      {
        "text": "No, ma dovrebbe riformare le leggi urbanistiche per aumentare l’offerta di alloggi",
        "axes": { "Eco": 70, "Società": 50 },
        "ideologies": []
      },
      {
        "text": "No, se non ti puoi permettere una casa non è un problema dello Stato",
        "axes": { "Eco": 100, "Società": 80 },
        "ideologies": []
      }
    ]
  },
  {
    "question": "Il governo dovrebbe ripristinare il \"Reddito di Cittadinanza\" per i cittadini disoccupati? (anche società)",
    "options": [
      {
        "text": "Sì, ma solo con controlli rigorosi per prevenire le frodi",
        "axes": { "Eco": 35, "Società": 30 },
        "ideologies": ["Sinistra"]
      },
      {
        "text": "Sì, è una rete di sicurezza fondamentale che protegge i cittadini più vulnerabili dalla povertà estrema",
        "axes": { "Eco": 5, "Società": 5 },
        "ideologies": ["Estrema sinistra", "Centro sinistra"]
      },
      {
        "text": "No, incentiva la disoccupazione e pone un onere insostenibile sul nostro debito pubblico",
        "axes": { "Eco": 90, "Società": 75 },
        "ideologies": ["Destra", "Centro", "Centro destra"]
      },
      {
        "text": "No, un disoccupato e solo uno scansafatiche, se vuole un reddito, che vada a lavorare.",
        "axes": { "Eco": 95, "Società": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "L'Italia dovrebbe aumentare o diminuire la spesa militare? (eco, identità, PE)",
    "options": [
      {
        "text": "Né l'uno né l'altro, sono soddisfatto dell'attuale livello di spesa",
        "axes": { "Eco": 50, "Identità": 50, "PE": 50 },
        "ideologies": []
      },
      {
        "text": "Aumentare aumentare aumentare, più soldi, più armi, viva la guerra!!",
        "axes": { "Eco": 100, "Identità": 100, "PE": 100 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "Aumentare",
        "axes": { "Eco": 80, "Identità": 80, "PE": 80 },
        "ideologies": ["Destra"]
      },
      {
        "text": "Diminuire",
        "axes": { "Eco": 30, "Identità": 25, "PE": 25 },
        "ideologies": ["Sinistra", "Estrema sinistra", "Centro sinistra"]
      },
      {
        "text": "La spesa militare è un furto ai danni degli affamati. Le guerre arricchiscono i produttori di armi e seppelliscono i poveri.",
        "axes": { "Eco": 10, "Identità": 10, "PE": 5 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Aumentare, ma solo dopo che il nostro deficit sarà drasticamente ridotto",
        "axes": { "Eco": 60, "Identità": 70, "PE": 60 },
        "ideologies": ["Centro destra", "Centro"]
      }
    ]
  },
  {
    "question": "Il governo dovrebbe mettere all'asta le concessioni balneari? (economia, anche identità)",
    "options": [
      {
        "text": "Sì, ma risarcite gli attuali gestori per i loro investimenti",
        "axes": { "Eco": 55, "Identità": 45 },
        "ideologies": ["Sinistra"]
      },
      {
        "text": "Sì, bisogna porre fine ai monopoli e aprire il mercato alla libera concorrenza",
        "axes": { "Eco": 90, "Identità": 40 },
        "ideologies": ["Centro sinistra", "Estrema sinistra", "Centro"]
      },
      {
        "text": "No, proteggiamo le imprese familiari dalle multinazionali straniere",
        "axes": { "Eco": 35, "Identità": 85 },
        "ideologies": ["Destra", "Centro destra"]
      },
      {
        "text": "No, le spiagge italiane sono patrimonio culturale, lasciamole al gestore balneare che ha a cuore la salvaguardia della spiaggia, e sicuramente no il profitto.",
        "axes": { "Eco": 20, "Identità": 75 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Le tasse universitarie nelle università pubbliche dovrebbero essere gratuite? (economia, società)",
    "options": [
      {
        "text": "Sì, ora sono troppo costose",
        "axes": { "Eco": 5, "Società": 5 },
        "ideologies": ["Sinistra", "Estrema sinistra"]
      },
      {
        "text": "No, ma gratuite per studenti a basso reddito con voti eccellenti",
        "axes": { "Eco": 40, "Società": 30 },
        "ideologies": ["Centro", "Centro sinistra", "Destra nazionalista", "Centro destra"]
      },
      {
        "text": "No, ma i costi delle tasse dovrebbero diminuire in base al reddito familiare",
        "axes": { "Eco": 30, "Società": 20 },
        "ideologies": ["Destra regionalista"]
      }
    ]
  },
  {
    "question": "Il governo dovrebbe aumentare la spesa per il trasporto pubblico? (economia, ambiente)",
    "options": [
      {
        "text": "No, ci sono questioni più importanti che necessitano di finanziamenti",
        "axes": { "Eco": 90, "Ambiente": 70 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "Sì, e offrire più trasporto pubblico gratuito",
        "axes": { "Eco": 5, "Ambiente": 15 },
        "ideologies": ["Sinistra"]
      },
      {
        "text": "Sì, ma solo se la spesa è destinata a soluzioni ecologiche",
        "axes": { "Eco": 15, "Ambiente": 5 },
        "ideologies": ["Estrema sinistra", "Centro sinistra", "Centro"]
      },
      {
        "text": "Sì",
        "axes": { "Eco": 25, "Ambiente": 35 },
        "ideologies": ["Destra", "Centro destra"]
      },
      {
        "text": "No, e dovremmo privatizzare più servizi di trasporto pubblico",
        "axes": { "Eco": 95, "Ambiente": 85 },
        "ideologies": []
      }
    ]
  },
  {
    "question": "Il governo dovrebbe vietare completamente i tirocini gratuiti e imporre un compenso mensile minimo per tutti gli stagisti? (economia, società)",
    "options": [
      {
        "text": "Sì, i tirocini non retribuiti sono sfruttamento e le aziende che usano il lavoro gratuito mascherato da formazione dovrebbero affrontare multe salate",
        "axes": { "Eco": 10, "Società": 5 },
        "ideologies": ["Estrema destra", "Estrema sinistra"]
      },
      {
        "text": "Sì, il tirocinio è pur sempre lavoro, e iniziare una carriera non dovrebbe richiedere l’aiuto di genitori ricchi",
        "axes": { "Eco": 15, "Società": 10 },
        "ideologies": ["Sinistra", "Centro sinistra", "Centro", "Destra nazionalista", "Centro destra"]
      },
      {
        "text": "No, imporre una retribuzione costringerà le aziende a cancellare i programmi di tirocinio ed escluderà i giovani dal mercato del lavoro",
        "axes": { "Eco": 85, "Società": 90 },
        "ideologies": ["Destra regionalista"]
      }
    ]
  },
  {
    "question": "I grandi supermercati e i centri commerciali dovrebbero essere obbligati a chiudere la domenica? (economia, società)",
    "options": [
      {
        "text": "Sì, i lavoratori meritano del tempo libero garantito per la famiglia e per andare a messa",
        "axes": { "Eco": 40, "Società": 90 },
        "ideologies": ["Estrema destra", "Centro sinistra"]
      },
      {
        "text": "Sì, la cultura dello shopping 24 ore su 24 avvantaggia le multinazionali a scapito delle piccole botteghe familiari",
        "axes": { "Eco": 20, "Società": 60 },
        "ideologies": ["Estrema sinistra", "Destra regionalista", "Sinistra"]
      },
      {
        "text": "No, le chiusure nel fine settimana freneranno la crescita economica e causeranno massicci licenziamenti nel commercio",
        "axes": { "Eco": 90, "Società": 30 },
        "ideologies": ["Centro destra", "Sinistra"]
      },
      {
        "text": "No, i consumatori meritano la comodità e i lavoratori volontari meritano la maggiorazione festiva",
        "axes": { "Eco": 70, "Società": 20 },
        "ideologies": ["Centro", "Destra nazionalista"]
      }
    ]
  },
  {
    "question": "Il governo dovrebbe abolire il tetto alle licenze dei taxi e aprire completamente il mercato alle app di ride-sharing?",
    "options": [
      {
        "text": "Sì, bisogna rompere il monopolio per abbassare i prezzi e ridurre le attese",
        "axes": { "Eco": 90 },
        "ideologies": ["Centro"]
      },
      {
        "text": "No, le app della gig economy sfruttano i lavoratori con paghe basse e zero tutele",
        "axes": { "Eco": 15 },
        "ideologies": ["Sinistra", "Centro sinistra", "Estrema sinistra"]
      },
      {
        "text": "No, manderebbe in bancarotta chi ha investito i risparmi di una vita nella licenza",
        "axes": { "Eco": 70 },
        "ideologies": ["Destra", "Centro destra", "Estrema destra"]
      }
    ]
  },
  {
    "question": "Qual è la tua posizione sull'aborto?",
    "options": [
      {
        "text": "L’aborto, quando la vita della donna non è a rischio, dovrebbe essere sempre illegale.",
        "axes": { "Società": 90, "Religione": 95 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "Sempre Pro-life, anche per le vittime di stupro e incesto.",
        "axes": { "Società": 100, "Religione": 100 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "Io non lo farei, ma il governo non ha il diritto di vietarlo.",
        "axes": { "Società": 60, "Religione": 60 },
        "ideologies": ["Destra", "Centro destra"]
      },
      {
        "text": "Pro-choice, e fornire contraccettivi, educazione sessuale e più servizi sociali aiuterà a ridurre il numero di aborti",
        "axes": { "Società": 0, "Religione": 0 },
        "ideologies": ["Centro", "Sinistra", "Estrema sinistra", "Centro sinistra"]
      }
    ]
  },
  {
    "question": "Sostieni la legalizzazione del matrimonio tra persone dello stesso sesso?",
    "options": [
      {
        "text": "Sì, ma non in chiesa.",
        "axes": { "Società": 70, "Religione": 30 },
        "ideologies": ["Centro destra"]
      },
      {
        "text": "Sì.",
        "axes": { "Società": 0, "Religione": 0 },
        "ideologies": ["Sinistra", "Estrema sinistra", "Centro sinistra", "Centro"]
      },
      {
        "text": "No, vanno bene le unioni civili, ma per favore non chiamiamole matrimonio",
        "axes": { "Società": 80, "Religione": 60 },
        "ideologies": ["Destra"]
      },
      {
        "text": "No, vietati i matrimoni tra frosci, e soprattutto vietiamo i frosci, sono un male per la società.",
        "axes": { "Società": 100, "Religione": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Bisognerebbe garantire maggiori diritti civili alle persone omosessuali, bisessuali, transgender (LGBT+)?",
    "options": [
      {
        "text": "Sì, fanno parte di una categoria oppressa, è giusto adottare misure specifiche per contrastare le discriminazioni e favorire l’inclusione.",
        "axes": { "Società": 0 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra"]
      },
      {
        "text": "Sì, le persone LGBT+ devono avere gli stessi diritti e le stesse tutele di tutti gli altri cittadini.",
        "axes": { "Società": 10 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra", "Centro"]
      },
      {
        "text": "I diritti attuali sono sufficienti: non sono necessarie ulteriori misure.",
        "axes": { "Società": 60 },
        "ideologies": ["Centro destra"]
      },
      {
        "text": "No, lo Stato non dovrebbe riconoscere diritti o tutele specifiche legate all'orientamento sessuale o all'identità di genere.",
        "axes": { "Società": 90 },
        "ideologies": ["Destra"]
      },
      {
        "text": "Al contrario, lo Stato dovrebbe rimuovere tutti i diritti alle persone LGTV o come cazz si chiamano sti frocioni…",
        "axes": { "Società": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Le aziende dovrebbero essere obbligate ad avere donne nel loro consiglio di amministrazione?",
    "options": [
      {
        "text": "Sì, ma solo per le grandi multinazionali",
        "axes": { "Società": 60 },
        "ideologies": ["Centro"]
      },
      {
        "text": "Sì, e il governo dovrebbe fare di più per richiedere la diversità sul posto di lavoro",
        "axes": { "Società": 5 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra"]
      },
      {
        "text": "No, i membri del consiglio dovrebbero essere i più qualificati indipendentemente dal genere",
        "axes": { "Società": 90 },
        "ideologies": ["Destra", "Estrema destra"]
      },
      {
        "text": "No, il governo non dovrebbe mai imporre la diversità alle aziende private",
        "axes": { "Società": 70 },
        "ideologies": ["Destra"]
      },
      {
        "text": "No, ma dovrebbero essere obbligate ad avere solo uomini. L’unica posizione accettabile per una donna in un consiglio di amministrazione è sotto la scrivania",
        "axes": { "Società": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Le scuole pubbliche dovrebbero essere obbligate a esporre un crocifisso in ogni aula?",
    "options": [
      {
        "text": "No, le scuole pubbliche devono rispettare tutte le credenze.",
        "axes": { "Società": 0, "Religione": 20, "Autorità": 10 },
        "ideologies": ["Sinistra", "Estrema sinistra", "Centro", "Centro sinistra"]
      },
      {
        "text": "No, lo Stato è laico e anche le scuole pubbliche devono esserlo.",
        "axes": { "Società": 10, "Religione": 10, "Autorità": 20 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Sì, è un simbolo vitale delle nostre profonde radici culturali e storiche.",
        "axes": { "Società": 90, "Religione": 95, "Autorità": 85 },
        "ideologies": ["Destra", "Centro destra"]
      },
      {
        "text": "Sì, così quei musulmani ignoranti capiscono chi comanda in Italia: il nostro Dio, non quel loro maometto scemetto.",
        "axes": { "Società": 100, "Religione": 100, "Autorità": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Le persone di età inferiore ai 18 anni dovrebbero poter ricevere trattamenti di transizione di genere?",
    "options": [
      {
        "text": "Sì, senza eccezioni.",
        "axes": { "Società": 0, "Autorità": 0 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Sì, ma solo per trattamenti non chirurgici come bloccanti della pubertà e terapia ormonale.",
        "axes": { "Società": 20, "Autorità": 30 },
        "ideologies": ["Sinistra", "Centro sinistra"]
      },
      {
        "text": "No, i bambini non dovrebbero poter prendere decisioni irreversibili sulla propria vita",
        "axes": { "Società": 50, "Autorità": 60 },
        "ideologies": ["Centro", "Destra", "Centro destra"]
      },
      {
        "text": "No, e vietare tutti i trattamenti di transizione di genere",
        "axes": { "Società": 95, "Autorità": 90 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "No, e vietare tutti i trattamenti di transizione di genere, e incarcerare tutti i transessuali… e anche i froci visto che ci siamo.",
        "axes": { "Società": 100, "Autorità": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Gli atleti transgender dovrebbero essere autorizzati a competere contro atleti che differiscono dal loro sesso assegnato alla nascita?",
    "options": [
      {
        "text": "Sì",
        "axes": { "Società": 0 },
        "ideologies": ["Estrema sinistra", "Sinistra"]
      },
      {
        "text": "Sì, ma solo se i loro livelli ormonali sono equivalenti a quelli della categoria di genere in cui competono",
        "axes": { "Società": 20 },
        "ideologies": ["Centro sinistra"]
      },
      {
        "text": "No, creare una categoria separata per permettere agli atleti transgender di competere tra loro",
        "axes": { "Società": 80 },
        "ideologies": ["Centro", "Centro destra", "Destra"]
      },
      {
        "text": "Se ti stai riferendo ad atleti come quella “donna” pugile, allora dovrebbero competere in base al sesso biologico.",
        "axes": { "Società": 90 },
        "ideologies": ["Destra", "Estrema destra"]
      },
      {
        "text": "No, e non ci dovrebbero essere atleti transgender, né tantomeno transgender in generale.",
        "axes": { "Società": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "I genitori dovrebbero perdere l’affidamento se usano intenzionalmente pronomi sbagliati per i loro figli?",
    "options": [
      {
        "text": "Sì, rifiutarsi di affermare l'identità di genere di un bambino è abuso psicologico e lo Stato deve intervenire per prevenire il suicidio giovanile",
        "axes": { "Società": 5, "Autorità": 95 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Sì, ma solo se il misgendering fa parte di un quadro più ampio e documentato di gravi abusi emotivi.",
        "axes": { "Società": 20, "Autorità": 85 },
        "ideologies": ["Sinistra", "Centro sinistra"]
      },
      {
        "text": "No",
        "axes": { "Società": 60, "Autorità": 20 },
        "ideologies": ["Centro"]
      },
      {
        "text": "No, lo Stato non ha alcun diritto di distruggere le famiglie per un'ideologia di genere soggettiva",
        "axes": { "Società": 70, "Autorità": 10 },
        "ideologies": ["Destra", "Centro destra"]
      },
      {
        "text": "Ma cosa cazzo ho appena letto. Questo è proprio il mondo al contrario, distopia allo stato puro.",
        "axes": { "Società": 90, "Autorità": 0 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Le donne possono intraprendere carriere?",
    "options": [
      {
        "text": "Assolutamente no, il ruolo principale di una donna è diventare madre, occuparsi della casa, dei figli e del marito.",
        "axes": { "Società": 100 },
        "ideologies": ["Estrema destra"]
      },
      {
        "text": "Si, ma la famiglia dovrebbe avere la priorità sulla carriera.",
        "axes": { "Società": 75 },
        "ideologies": ["Destra", "Centro destra"]
      },
      {
        "text": "La scelta dovrebbe dipendere dalle preferenze e dalle circostanze di ogni famiglia.",
        "axes": { "Società": 50 },
        "ideologies": ["Centro"]
      },
      {
        "text": "Certo che possono: madri e padri dovrebbero condividere equamente le responsabilità familiari e professionali.",
        "axes": { "Società": 10 },
        "ideologies": ["Sinistra", "Centro sinistra", "Estrema sinistra"]
      }
    ]
  },
  {
    "question": "La società era migliore molti anni fa od oggi?",
    "options": [
      {
        "text": "Sicuramente oggi: rispetto ad anni la società è migliorata in tutto, dai valori sociali alla medicina…",
        "axes": { "Società": 0 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra"]
      },
      {
        "text": "Oggi, nel complesso, i cambiamenti sociali hanno migliorato la società.",
        "axes": { "Società": 20 },
        "ideologies": ["Centro"]
      },
      {
        "text": "Oggi, anche se abbiamo perso molti valori positivi del passato.",
        "axes": { "Società": 40 },
        "ideologies": ["Centro destra"]
      },
      {
        "text": "Si stava meglio quando si stava peggio.",
        "axes": { "Società": 80 },
        "ideologies": ["Destra"]
      },
      {
        "text": "La società moderna è in completo decadimento morale e culturale; dovremmo recuperare i valori e le tradizioni del passato. Duce manchiiiiii!!!!!",
        "axes": { "Società": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "La nostra razza ha molte qualità superiori rispetto alle altre razze?",
    "options": [
      {
        "text": "L’unica razza superiore è il proletariato.",
        "axes": { "Società": 50 },
        "ideologies": ["Estrema sinistra"]
      },
      {
        "text": "Il concetto stesso di gerarchia razziale è infondato e ogni forma di razzismo deve essere contrastata.",
        "axes": { "Società": 0 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra"]
      },
      {
        "text": "Nessuna razza è superiore a un’altra",
        "axes": { "Società": 30 },
        "ideologies": ["Centro", "Centro destra"]
      },
      {
        "text": "Esistono differenze tra le popolazioni, ma non è possibile stabilire una superiorità generale",
        "axes": { "Società": 75 },
        "ideologies": ["Destra"]
      },
      {
        "text": "Molte? La razza bianca, ramo italico, è intrinsecamente superiore a tutte le altre razze.",
        "axes": { "Società": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Quanto ti senti a tuo agio se qualcuno usa i pronomi neutri (come il “they/them” in inglese) invece di \"lui\" o \"lei\" per descrivere sè stesso?",
    "options": [
      {
        "text": "Completamente a mio agio, dovremmo usarli tutti per combattere le discriminazioni legate al genere",
        "axes": { "Società": 0 },
        "ideologies": ["Sinistra"]
      },
      {
        "text": "A mio agio.",
        "axes": { "Società": 10 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra"]
      },
      {
        "text": "Normale",
        "axes": { "Società": 50 },
        "ideologies": ["Centro"]
      },
      {
        "text": "Ci sono problemi ben più importanti per il Paese di cui dovremmo occuparci.",
        "axes": { "Società": 70 },
        "ideologies": ["Centro destra", "Destra"]
      },
      {
        "text": "L’italiano è una lingua sacra, e la sua grammatica va rispettata. Posso accettare l’asterisco per il genere neutro solo se sostituito con una svastica.",
        "axes": { "Società": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Il governo dovrebbe aumentare i finanziamenti per la ricerca e il trattamento della salute mentale? (società, anche economia)",
    "options": [
      {
        "text": "Sì",
        "axes": { "Società": 50, "Eco": 80 },
        "ideologies": ["Estrema sinistra", "Centro sinistra", "Sinistra", "Centro", "Centro destra", "Destra", "Estrema destra"]
      },
      {
        "text": "No",
        "axes": { "Società": 80, "Eco": 20 },
        "ideologies": []
      },
      {
        "text": "No, chi ha problemi di “salute mentale” è solo uno svogliato che non ha voglia di far niente, andrebbe arruolato immediatamente",
        "axes": { "Società": 100, "Eco": 20 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Le associazioni anti-abortiste dovrebbero poter operare all'interno dei consultori pubblici che gestiscono le richieste di aborto? (società, religione)",
    "options": [
      {
        "text": "No, i consultori devono rimanere laici e liberi da interferenze ideologiche.",
        "axes": { "Società": 5, "Religione": 5 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra", "Centro"]
      },
      {
        "text": "Sì, alle donne dovrebbero essere offerti sostegno economico e alternative all'aborto.",
        "axes": { "Società": 65, "Religione": 75 },
        "ideologies": ["Destra", "Centro destra"]
      },
      {
        "text": "Dovrebbero essere vietato l’aborto, ed essere infissa la pena di morte per qualsiasi donna lo faccia",
        "axes": { "Società": 100, "Religione": 90 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Si dovrebbe imporre un tetto massimo alla percentuale di studenti non madrelingua in ogni classe scolastica? (società, identità)",
    "options": [
      {
        "text": "No, escludere i bambini in base alla provenienza è segregazionista e viola il loro diritto all'istruzione",
        "axes": { "Società": 0, "Identità": 5 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra"]
      },
      {
        "text": "No, ma assumere più insegnanti di sostegno linguistico",
        "axes": { "Società": 15, "Identità": 15 },
        "ideologies": ["Centro", "Sinistra"]
      },
      {
        "text": "Sì, prevenire le \"classi ghetto\" garantisce una migliore integrazione nella cultura locale",
        "axes": { "Società": 55, "Identità": 70 },
        "ideologies": ["Centro sinistra", "Destra nazionalista"]
      },
      {
        "text": "Sì, le barriere linguistiche rallentano il programma e danneggiano la qualità dell'istruzione per tutti",
        "axes": { "Società": 65, "Identità": 75 },
        "ideologies": ["Destra regionalista"]
      },
      {
        "text": "Si, con un tetto di 0 studenti non madrelingue per classe: tutti gli stranieri in scuole per loro, non a contatto con la nostra gioventù pulita.",
        "axes": { "Società": 100, "Identità": 100 },
        "ideologies": ["Estrema destra"]
      }
    ]
  },
  {
    "question": "Quanto ritieni che il cambiamento climatico rappresenti un problema?",
    "options": [
      {
        "text": "È una delle maggiori minacce per l'umanità: bisogna intervenire immediatamente, anche sacrificando parte della crescita economica.",
        "axes": { "Ambiente": 0 },
        "ideologies": ["Estrema sinistra", "Sinistra", "Centro sinistra"]
      },
      {
        "text": "Non esiste, il clima è sempre cambiato e il mondo si è sempre adattato.",
        "axes": { "Ambiente": 1
                 {
    "question": "Dovrebbe essere illegale bruciare la bandiera italiana? (identità, autorità)",
    "options": [
      {
        "text": "No, questa è una violazione della libertà di espressione",
        "axes": {
          "Identità": 10,
          "Autorità": 10
        },
        "ideologies": [
          "Estrema sinistra",
          "Sinistra"
        ]
      },
      {
        "text": "No, non rispetto chi lo fa ma dovrebbero avere il diritto di farlo",
        "axes": {
          "Identità": 30,
          "Autorità": 20
        },
        "ideologies": []
      },
      {
        "text": "Sì, e dovrebbe essere illegale bruciare la bandiera di qualsiasi nazione (soprattutto la loro…)",
        "axes": {
          "Identità": 75,
          "Autorità": 70
        },
        "ideologies": [
          "Destra"
        ]
      },
      {
        "text": "Sì",
        "axes": {
          "Identità": 65,
          "Autorità": 65
        },
        "ideologies": [
          "Centro sinistra",
          "Centro",
          "Centro destra",
          "Estrema destra"
        ]
      },
      {
        "text": "Ovviamente, pena di morte per chi osa bruciare il sacro tricolore",
        "axes": {
          "Identità": 100,
          "Autorità": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      }
    ]
  },
  {
    "question": "Le istituzioni e i funzionari pubblici dovrebbero essere multati per l'uso di parole inglesi al posto di quelle italiane nelle comunicazioni ufficiali? (identità, autorità)",
    "options": [
      {
        "text": "No, imporre un nazionalismo linguistico rende il nostro Paese ridicolo e provinciale.",
        "axes": {
          "Identità": 10,
          "Autorità": 10
        },
        "ideologies": [
          "Centro",
          "Centro destra",
          "Centro sinistra",
          "Destra",
          "Sinistra",
          "Estrema sinistra"
        ]
      },
      {
        "text": "Sì, dobbiamo fermare l'\"Anglomania\" e difendere la purezza culturale della lingua di Dante.",
        "axes": {
          "Identità": 100,
          "Autorità": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      }
    ]
  },
  {
    "question": "Le città storiche come Venezia e Firenze dovrebbero far pagare ai turisti giornalieri un biglietto d'ingresso per visitare il centro? (organizzazione, anche eco e società)",
    "options": [
      {
        "text": "No, è una discriminazione classista che limita la libertà di movimento in base alla ricchezza.",
        "axes": {
          "Eco": 10,
          "Società": 10
        },
        "ideologies": [
          "Estrema sinistra"
        ]
      },
      {
        "text": "No, le città italiane sono patrimonio pubblico, non parchi a tema con biglietterie.",
        "axes": {
          "Eco": 20,
          "Società": 30
        },
        "ideologies": [
          "Sinistra",
          "Destra nazionalista"
        ]
      },
      {
        "text": "Sì, ma solo se le entrate vengono usate per abbassare le tasse ai residenti.",
        "axes": {
          "Eco": 80,
          "Società": 60
        },
        "ideologies": [
          "Destra regionalista",
          "Centro destra",
          "Centro sinistra",
          "Estrema destra",
          "Centro"
        ]
      },
      {
        "text": "Sì, così il mio amico Edo può lavorare e venire in ferie con me",
        "axes": {
          "Eco": 70,
          "Società": 70
        },
        "ideologies": []
      }
    ]
  },
  {
    "question": "Il governo dovrebbe costruire un ponte che colleghi la Sicilia alla terraferma italiana? (organizzazione, eco, ambiente)",
    "options": [
      {
        "text": "No, bisogna dare priorità al miglioramento delle infrastrutture fatiscenti in Sicilia e Calabria",
        "axes": {
          "Eco": 20,
          "Ambiente": 30
        },
        "ideologies": [
          "Sinistra",
          "Estrema sinistra",
          "Centro sinistra"
        ]
      },
      {
        "text": "No, il rischio sismico è troppo elevato e minaccia l'ecosistema dello Stretto di Messina",
        "axes": {
          "Eco": 30,
          "Ambiente": 0
        },
        "ideologies": []
      },
      {
        "text": "Sì, quest'opera storica rilancerà il Mezzogiorno e creerà migliaia di posti di lavoro",
        "axes": {
          "Eco": 80,
          "Ambiente": 100
        },
        "ideologies": [
          "Centro",
          "Centro destra",
          "Destra",
          "Estrema destra"
        ]
      }
    ]
  },
  {
    "question": "Sei favorevole alla depenalizzazione dell'uso di droghe? (giustizia, anche società)",
    "options": [
      {
        "text": "Sì, per la maggior parte ma non per tutte.",
        "axes": {
          "Giustizia": 25,
          "Società": 20
        },
        "ideologies": [
          "Sinistra"
        ]
      },
      {
        "text": "Sì, per tutte",
        "axes": {
          "Giustizia": 0,
          "Società": 0
        },
        "ideologies": [
          "Estrema sinistra"
        ]
      },
      {
        "text": "No, ma depenalizzare le droghe leggere, come la marijuana",
        "axes": {
          "Giustizia": 35,
          "Società": 30
        },
        "ideologies": [
          "Centro sinistra"
        ]
      },
      {
        "text": "No, ma aumentare i finanziamenti per la prevenzione e la riabilitazione dalle dipendenze",
        "axes": {
          "Giustizia": 15,
          "Società": 20
        },
        "ideologies": [
          "Centro"
        ]
      },
      {
        "text": "Sì, e ridurre retroattivamente le pene per chi sta già scontando una condanna",
        "axes": {
          "Giustizia": 5,
          "Società": 10
        },
        "ideologies": []
      },
      {
        "text": "No, anzi dovremmo aumentare le pene sulle droghe, sia per gli spacciatori, sia per chi le usa",
        "axes": {
          "Giustizia": 100,
          "Società": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      },
      {
        "text": "No, e aumentare le pene per gli spacciatori di droga",
        "axes": {
          "Giustizia": 90,
          "Società": 90
        },
        "ideologies": [
          "Destra",
          "Centro destra"
        ]
      }
    ]
  },
  {
    "question": "Sostieni la legalizzazione della marijuana? (giustizia, società)",
    "options": [
      {
        "text": "Sì, e rilasciare immediatamente chiunque stia scontando una pena solo per reati di droga",
        "axes": {
          "Giustizia": 0,
          "Società": 0
        },
        "ideologies": [
          "Estrema sinistra",
          "Sinistra"
        ]
      },
      {
        "text": "Sì, la cannabis per uso personale deve essere legalizzata e regolamentata dallo Stato, come avviene per alcol e tabacco.",
        "axes": {
          "Giustizia": 10,
          "Società": 10
        },
        "ideologies": [
          "Estrema sinistra",
          "Sinistra"
        ]
      },
      {
        "text": "Sì, ma solo per uso medico",
        "axes": {
          "Giustizia": 35,
          "Società": 35
        },
        "ideologies": [
          "Centro sinistra",
          "Centro",
          "Destra regionalista",
          "Centro destra"
        ]
      },
      {
        "text": "No, vietare tutte le droghe e pene severissime per chi le usa e chi le vende",
        "axes": {
          "Giustizia": 100,
          "Società": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      },
      {
        "text": "No, poiché si inizia con le droghe leggere e poi si passa alle pesanti.",
        "axes": {
          "Giustizia": 75,
          "Società": 85
        },
        "ideologies": [
          "Destra nazionalista"
        ]
      }
    ]
  },
  {
    "question": "Le città dovrebbero aprire dei \"rifugi sicuri\" dove le persone dipendenti da droghe illegali possano usarle sotto la supervisione di professionisti medici? (giustizia, società)",
    "options": [
      {
        "text": "Sì, l'abuso di droghe dovrebbe essere trattato come un problema di salute, non come un problema criminale",
        "axes": {
          "Giustizia": 5,
          "Società": 10
        },
        "ideologies": [
          "Centro sinistra"
        ]
      },
      {
        "text": "Sì, è necessario per ridurre il tasso di mortalità per overdose da droga",
        "axes": {
          "Giustizia": 10,
          "Società": 5
        },
        "ideologies": [
          "Estrema sinistra",
          "Sinistra"
        ]
      },
      {
        "text": "Sì, anche per chi non è dipendente ma vuole solo provarle.",
        "axes": {
          "Giustizia": 0,
          "Società": 0
        },
        "ideologies": []
      },
      {
        "text": "No, questo incoraggerebbe l'uso di droghe e ridurrebbe i fondi per i centri di riabilitazione",
        "axes": {
          "Giustizia": 85,
          "Società": 85
        },
        "ideologies": [
          "Centro",
          "Destra",
          "Centro destra"
        ]
      },
      {
        "text": "Si, ma solo come diversivo, una volta entrati, i drogati andrebbero arrestati e sbattuti in prigione",
        "axes": {
          "Giustizia": 100,
          "Società": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      }
    ]
  },
  {
    "question": "Ai pazienti terminali dovrebbe essere permesso di porre fine alla propria vita tramite suicidio assistito? (anche sociale)",
    "options": [
      {
        "text": "No",
        "axes": {
          "Giustizia": 65,
          "Società": 85,
          "Religione": 90
        },
        "ideologies": [
          "Centro destra",
          "Destra"
        ]
      },
      {
        "text": "Sì, ma solo se non c'è alcuna possibilità che sopravvivano alla loro malattia",
        "axes": {
          "Giustizia": 20,
          "Società": 15,
          "Religione": 15
        },
        "ideologies": [
          "Estrema sinistra"
        ]
      },
      {
        "text": "Sì, ma solo dopo una valutazione psicologica che dimostri che comprendono pienamente questa scelta",
        "axes": {
          "Giustizia": 25,
          "Società": 20,
          "Religione": 10
        },
        "ideologies": [
          "Centro sinistra",
          "Sinistra"
        ]
      },
      {
        "text": "Sì, ai cittadini dovrebbe essere garantita libertà di scelta in materia di eutanasia",
        "axes": {
          "Giustizia": 15,
          "Società": 10,
          "Religione": 0
        },
        "ideologies": [
          "Centro"
        ]
      },
      {
        "text": "No, pena di morte per chi ci prova",
        "axes": {
          "Giustizia": 100,
          "Società": 100,
          "Religione": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      }
    ]
  },
  {
    "question": "Sostieni la pena di morte?",
    "options": [
      {
        "text": "Sì, ma solo per crimini orribili con prove inconfutabili",
        "axes": {
          "Giustizia": 85
        },
        "ideologies": []
      },
      {
        "text": "No, troppe persone vengono condannate ingiustamente",
        "axes": {
          "Giustizia": 10
        },
        "ideologies": [
          "Estrema sinistra",
          "Sinistra",
          "Centro sinistra",
          "Centro"
        ]
      },
      {
        "text": "No, passare la vita in prigione è una pena più dura",
        "axes": {
          "Giustizia": 65
        },
        "ideologies": [
          "Centro destra",
          "Destra"
        ]
      },
      {
        "text": "Sì, per la maggior parte dei crimini più gravi.",
        "axes": {
          "Giustizia": 95
        },
        "ideologies": []
      },
      {
        "text": "Sì, anche senza processo; si prende l’oppositore e bang bang",
        "axes": {
          "Giustizia": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      },
      {
        "text": "Sì, ma solo se è dolorosa",
        "axes": {
          "Giustizia": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      }
    ]
  },
  {
    "question": "Come giudichi il comportamento di Mario Roggero?",
    "options": [
      {
        "text": "È stato un atto ingiustificabile: una persona non può farsi giustizia da solo.",
        "axes": {
          "Giustizia": 15,
          "Società": 10
        },
        "ideologies": [
          "Estrema sinistra",
          "Sinistra",
          "Centro sinistra",
          "Centro"
        ]
      },
      {
        "text": "La sua reazione è comprensibile, ma eccessiva",
        "axes": {
          "Giustizia": 60,
          "Società": 60
        },
        "ideologies": []
      },
      {
        "text": "Ha fatto bene a difendersi: i ladri devono assumersi il rischio delle conseguenze. Occhio per occhio, dente per dente.",
        "axes": {
          "Giustizia": 90,
          "Società": 80
        },
        "ideologies": [
          "Destra"
        ]
      },
      {
        "text": "Ne servirebbero molti più di Mario Ruggero",
        "axes": {
          "Giustizia": 100,
          "Società": 100
        },
        "ideologies": [
          "Destra regionalista",
          "Estrema destra"
        ]
      },
      {
        "text": "Bang bang, ammazzali tutti Mario",
        "axes": {
          "Giustizia": 100,
          "Società": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      }
    ]
  },
  {
    "question": "Il sistema giudiziario dovrebbe istituire il \"femminicidio\" come capo d'accusa specifico con pene obbligatorie più severe rispetto al normale omicidio?",
    "options": [
      {
        "text": "Sì, l'uccisione mirata delle donne è un'epidemia sistemica radicata nel patriarcato che la legge deve riconoscere e punire severamente",
        "axes": {
          "Giustizia": 85,
          "Società": 0
        },
        "ideologies": [
          "Estrema sinistra",
          "Sinistra"
        ]
      },
      {
        "text": "Sì",
        "axes": {
          "Giustizia": 70,
          "Società": 20
        },
        "ideologies": [
          "Centro",
          "Destra",
          "Centro destra",
          "Centro sinistra"
        ]
      },
      {
        "text": "No, il femminicidio non esiste, è solo un etichetta propagandistica e allarmistica creata dai sinistri; inoltre, se lo dovessimo istituire, dovremmo istituire anche il corrispettivo maschicidio.",
        "axes": {
          "Giustizia": 20,
          "Società": 100
        },
        "ideologies": [
          "Estrema destra"
        ]
      }
    ]
  },
  {
    "question": "Il governo dovrebbe implementare programmi di giustizia riparativa come alternativa all'incarcerazione?",
    "options": [
      {
        "text": "Sì, ma solo se i reati sono non violenti",
        "axes": {
          "Giustizia": 20
        },
        "ideologies
