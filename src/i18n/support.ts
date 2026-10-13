/**
 * The support page, in the site's six languages. Steps quote the app's own labels in each
 * language (Settings, Partner Integrations and so on), so they match what people see on screen.
 */
import type { Lang } from './ui';

export const supportEmail = 'support@athlethium.com';

const en = {
  nav: 'Support',
  meta: {
    title: 'Support — Athlethium',
    description:
      'Get help with Athlethium: contact support, reset your password, connect Strava, upload FIT files, change language or units, and delete your account.',
  },
  kicker: 'Support',
  title: 'How can we help?',
  intro: "Find quick answers below, or email us and we'll get back to you.",
  contact: {
    title: 'Contact support',
    body: "Email us about anything: a bug, a question about your plan, or feedback. Tell us your device and what you were doing, and we'll take it from there.",
    button: 'Email support',
  },
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'I forgot my password. How do I reset it?',
      a: 'On the sign-in screen, tap “Forgot Password?”, enter your email address and follow the link we send you.',
    },
    {
      q: 'How do I connect Strava?',
      a: 'Open Settings › Partner Integrations and tap “Connect with Strava”. Completed rides, runs and swims are then imported automatically and matched to your plan. You can disconnect in the same place.',
    },
    {
      q: 'Can I upload a workout file instead?',
      a: 'Yes. Open the session in your plan and tap “Upload” to add a FIT file from your watch or bike computer. Athlethium analyses it and marks the session complete.',
    },
    {
      q: 'How do I change the language or units?',
      a: 'Open Settings › Athlete Profile. Under Language, pick a language, or “Phone language” to follow your phone. Measurement Units switches between metric and imperial.',
    },
    {
      q: 'My schedule has changed. How do I update my plan?',
      a: 'Adjust your Daily Availability and sports in Settings, or tap “Rerun Setup Wizard” to set up your goal and plan again from the beginning.',
    },
    {
      q: 'How do I delete my account?',
      a: "Open Settings, tap “Delete Account” and confirm with your password. This permanently removes your account and all of its data. If you can't sign in, email us and we'll delete it for you.",
    },
    {
      q: 'Which devices does Athlethium work on?',
      a: 'Athlethium is available for iPhone and Android phones.',
    },
  ],
};

export type SupportCopy = typeof en;

const es: SupportCopy = {
  nav: 'Soporte',
  meta: {
    title: 'Soporte — Athlethium',
    description:
      'Ayuda con Athlethium: contacta con soporte, restablece tu contraseña, conecta Strava, sube archivos FIT, cambia el idioma o las unidades y elimina tu cuenta.',
  },
  kicker: 'Soporte',
  title: '¿En qué podemos ayudarte?',
  intro: 'Encuentra respuestas rápidas aquí abajo o escríbenos y te responderemos.',
  contact: {
    title: 'Contactar con soporte',
    body: 'Escríbenos sobre lo que sea: un error, una duda sobre tu plan o tus comentarios. Indícanos tu dispositivo y qué estabas haciendo, y nos encargamos del resto.',
    button: 'Escribir a soporte',
  },
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: 'He olvidado mi contraseña. ¿Cómo la restablezco?',
      a: 'En la pantalla de inicio de sesión, toca “¿Olvidaste tu contraseña?”, introduce tu correo electrónico y sigue el enlace que te enviaremos.',
    },
    {
      q: '¿Cómo conecto Strava?',
      a: 'Abre Ajustes › Integraciones y toca “Conectar con Strava”. A partir de ahí, tus salidas en bici, carreras y sesiones de natación completadas se importan automáticamente y se asocian a tu plan. Puedes desconectarlo en el mismo lugar.',
    },
    {
      q: '¿Puedo subir un archivo de entrenamiento?',
      a: 'Sí. Abre la sesión en tu plan y toca “Subir” para añadir un archivo FIT de tu reloj o ciclocomputador. Athlethium lo analiza y marca la sesión como completada.',
    },
    {
      q: '¿Cómo cambio el idioma o las unidades?',
      a: 'Abre Ajustes › Perfil de atleta. En Idioma, elige un idioma o “Idioma del teléfono” para usar el de tu teléfono. Unidades de medida cambia entre sistema métrico e imperial.',
    },
    {
      q: 'Mi horario ha cambiado. ¿Cómo actualizo mi plan?',
      a: 'Ajusta tu Disponibilidad diaria y tus deportes en Ajustes, o toca “Repetir configuración inicial” para volver a configurar tu objetivo y tu plan desde el principio.',
    },
    {
      q: '¿Cómo elimino mi cuenta?',
      a: 'Abre Ajustes, toca “Eliminar cuenta” y confirma con tu contraseña. Así se eliminan de forma permanente tu cuenta y todos sus datos. Si no puedes iniciar sesión, escríbenos y la eliminaremos por ti.',
    },
    {
      q: '¿En qué dispositivos funciona Athlethium?',
      a: 'Athlethium está disponible para iPhone y teléfonos Android.',
    },
  ],
};

const fr: SupportCopy = {
  nav: 'Assistance',
  meta: {
    title: 'Assistance — Athlethium',
    description:
      "Obtenez de l'aide pour Athlethium : contacter l'assistance, réinitialiser votre mot de passe, connecter Strava, importer des fichiers FIT, changer de langue ou d'unités et supprimer votre compte.",
  },
  kicker: 'Assistance',
  title: 'Comment pouvons-nous vous aider ?',
  intro: 'Trouvez des réponses rapides ci-dessous, ou écrivez-nous et nous vous répondrons.',
  contact: {
    title: "Contacter l'assistance",
    body: 'Écrivez-nous pour tout : un bug, une question sur votre plan ou une suggestion. Indiquez votre appareil et ce que vous faisiez, et nous nous occupons du reste.',
    button: "Écrire à l'assistance",
  },
  faqTitle: 'Questions fréquentes',
  faqs: [
    {
      q: "J'ai oublié mon mot de passe. Comment le réinitialiser ?",
      a: "Sur l'écran de connexion, touchez « Mot de passe oublié ? », saisissez votre adresse e-mail et suivez le lien que nous vous envoyons.",
    },
    {
      q: 'Comment connecter Strava ?',
      a: 'Ouvrez Réglages › Applications partenaires et touchez « Se connecter à Strava ». Vos sorties vélo, courses et séances de natation terminées sont ensuite importées automatiquement et associées à votre plan. Vous pouvez vous déconnecter au même endroit.',
    },
    {
      q: "Puis-je importer un fichier d'entraînement ?",
      a: "Oui. Ouvrez la séance dans votre plan et touchez « Importer » pour ajouter un fichier FIT depuis votre montre ou votre compteur. Athlethium l'analyse et marque la séance comme terminée.",
    },
    {
      q: 'Comment changer la langue ou les unités ?',
      a: "Ouvrez Réglages › Profil de l'athlète. Dans Langue, choisissez une langue ou « Langue du téléphone » pour suivre celle de votre téléphone. Unités de mesure permet de passer du système métrique à l'impérial.",
    },
    {
      q: 'Mon emploi du temps a changé. Comment mettre à jour mon plan ?',
      a: "Modifiez vos Disponibilités et vos sports dans Réglages, ou touchez « Relancer l'assistant » pour reconfigurer votre objectif et votre plan depuis le début.",
    },
    {
      q: 'Comment supprimer mon compte ?',
      a: 'Ouvrez Réglages, touchez « Supprimer le compte » puis confirmez avec votre mot de passe. Votre compte et toutes ses données sont alors supprimés définitivement. Si vous ne pouvez pas vous connecter, écrivez-nous et nous le supprimerons pour vous.',
    },
    {
      q: 'Sur quels appareils Athlethium fonctionne-t-il ?',
      a: 'Athlethium est disponible sur iPhone et sur les téléphones Android.',
    },
  ],
};

const de: SupportCopy = {
  nav: 'Support',
  meta: {
    title: 'Support — Athlethium',
    description:
      'Hilfe zu Athlethium: Support kontaktieren, Passwort zurücksetzen, Strava verbinden, FIT-Dateien hochladen, Sprache oder Einheiten ändern und dein Konto löschen.',
  },
  kicker: 'Support',
  title: 'Wie können wir helfen?',
  intro: 'Hier findest du schnelle Antworten – oder schreib uns, und wir melden uns bei dir.',
  contact: {
    title: 'Support kontaktieren',
    body: 'Schreib uns zu allem: einem Fehler, einer Frage zu deinem Plan oder Feedback. Nenne dein Gerät und was du gerade gemacht hast, dann kümmern wir uns darum.',
    button: 'Support anschreiben',
  },
  faqTitle: 'Häufige Fragen',
  faqs: [
    {
      q: 'Ich habe mein Passwort vergessen. Wie setze ich es zurück?',
      a: 'Tippe auf dem Anmeldebildschirm auf „Passwort vergessen?“, gib deine E-Mail-Adresse ein und folge dem Link, den wir dir schicken.',
    },
    {
      q: 'Wie verbinde ich Strava?',
      a: 'Öffne Einstellungen › Partner-Integrationen und tippe auf „Mit Strava verbinden“. Danach werden abgeschlossene Rad-, Lauf- und Schwimmeinheiten automatisch importiert und deinem Plan zugeordnet. Trennen kannst du die Verbindung an derselben Stelle.',
    },
    {
      q: 'Kann ich stattdessen eine Trainingsdatei hochladen?',
      a: 'Ja. Öffne die Einheit in deinem Plan und tippe auf „Hochladen“, um eine FIT-Datei von deiner Uhr oder deinem Radcomputer hinzuzufügen. Athlethium wertet sie aus und markiert die Einheit als erledigt.',
    },
    {
      q: 'Wie ändere ich Sprache oder Einheiten?',
      a: 'Öffne Einstellungen › Athletenprofil. Unter Sprache wählst du eine Sprache oder „Gerätesprache“, um der Sprache deines Handys zu folgen. Unter Maßeinheiten wechselst du zwischen metrisch und imperial.',
    },
    {
      q: 'Mein Zeitplan hat sich geändert. Wie passe ich meinen Plan an?',
      a: 'Passe deine Tägliche Verfügbarkeit und deine Sportarten in den Einstellungen an, oder tippe auf „Einrichtung neu starten“, um Ziel und Plan von vorn einzurichten.',
    },
    {
      q: 'Wie lösche ich mein Konto?',
      a: 'Öffne die Einstellungen, tippe auf „Konto löschen“ und bestätige mit deinem Passwort. Dein Konto und alle zugehörigen Daten werden dann dauerhaft gelöscht. Wenn du dich nicht anmelden kannst, schreib uns und wir löschen es für dich.',
    },
    {
      q: 'Auf welchen Geräten läuft Athlethium?',
      a: 'Athlethium gibt es für iPhone und Android-Smartphones.',
    },
  ],
};

const it: SupportCopy = {
  nav: 'Assistenza',
  meta: {
    title: 'Assistenza — Athlethium',
    description:
      "Aiuto per Athlethium: contatta l'assistenza, reimposta la password, collega Strava, carica file FIT, cambia lingua o unità ed elimina il tuo account.",
  },
  kicker: 'Assistenza',
  title: 'Come possiamo aiutarti?',
  intro: 'Trova qui sotto le risposte più rapide, oppure scrivici e ti risponderemo.',
  contact: {
    title: "Contatta l'assistenza",
    body: 'Scrivici per qualsiasi cosa: un bug, una domanda sul tuo piano o un suggerimento. Indica il tuo dispositivo e cosa stavi facendo, e ci pensiamo noi.',
    button: "Scrivi all'assistenza",
  },
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: 'Ho dimenticato la password. Come la reimposto?',
      a: 'Nella schermata di accesso tocca “Password dimenticata?”, inserisci il tuo indirizzo email e segui il link che ti inviamo.',
    },
    {
      q: 'Come collego Strava?',
      a: 'Apri Impostazioni › Integrazioni e tocca “Connetti Strava”. Da quel momento uscite in bici, corse e nuotate completate vengono importate automaticamente e abbinate al tuo piano. Puoi disconnetterti dallo stesso punto.',
    },
    {
      q: 'Posso caricare un file di allenamento?',
      a: 'Sì. Apri la seduta nel tuo piano e tocca “Carica” per aggiungere un file FIT dal tuo orologio o ciclocomputer. Athlethium lo analizza e segna la seduta come completata.',
    },
    {
      q: 'Come cambio lingua o unità di misura?',
      a: 'Apri Impostazioni › Profilo atleta. In Lingua scegli una lingua oppure “Lingua del telefono” per seguire quella del telefono. Unità di misura passa dal sistema metrico a quello imperiale.',
    },
    {
      q: 'I miei orari sono cambiati. Come aggiorno il piano?',
      a: 'Modifica la Disponibilità giornaliera e i tuoi sport nelle Impostazioni, oppure tocca “Ripeti configurazione” per impostare di nuovo obiettivo e piano da zero.',
    },
    {
      q: 'Come elimino il mio account?',
      a: "Apri Impostazioni, tocca “Elimina account” e conferma con la tua password. L'account e tutti i suoi dati vengono eliminati definitivamente. Se non riesci ad accedere, scrivici e lo elimineremo noi.",
    },
    {
      q: 'Su quali dispositivi funziona Athlethium?',
      a: 'Athlethium è disponibile per iPhone e smartphone Android.',
    },
  ],
};

const ja: SupportCopy = {
  nav: 'サポート',
  meta: {
    title: 'サポート — Athlethium',
    description:
      'Athlethium のサポート：お問い合わせ、パスワードの再設定、Strava の接続、FIT ファイルのアップロード、言語や単位の変更、アカウントの削除について。',
  },
  kicker: 'サポート',
  title: 'どのようなことでお困りですか？',
  intro: 'よくある質問をご確認いただくか、メールでお気軽にお問い合わせください。',
  contact: {
    title: 'サポートに問い合わせる',
    body: '不具合、プランについての質問、ご意見など、何でもメールでお送りください。お使いの端末と操作内容を添えていただくと、スムーズに対応できます。',
    button: 'サポートにメール',
  },
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'パスワードを忘れました。再設定するには？',
      a: 'ログイン画面で「パスワードをお忘れですか？」をタップし、メールアドレスを入力して、届いたメールのリンクを開いてください。',
    },
    {
      q: 'Strava と接続するには？',
      a: '設定 › 外部サービス連携 を開き、「Stravaと接続」をタップします。完了したライド、ラン、スイムが自動で取り込まれ、プランと照合されます。接続の解除も同じ場所から行えます。',
    },
    {
      q: 'ワークアウトファイルをアップロードできますか？',
      a: 'はい。プランのセッションを開いて「アップロード」をタップし、ウォッチやサイクルコンピューターの FIT ファイルを追加してください。Athlethium が分析し、セッションを完了にします。',
    },
    {
      q: '言語や単位を変更するには？',
      a: '設定 › アスリートプロフィール を開きます。「言語」で言語を選ぶか、「端末の言語」を選ぶとスマートフォンの言語に合わせます。「単位」でメートル法とヤード・ポンド法を切り替えられます。',
    },
    {
      q: '予定が変わりました。プランを更新するには？',
      a: '設定で「1日のトレーニング可能時間」や競技を変更するか、「セットアップウィザードをやり直す」をタップして目標とプランを最初から設定し直してください。',
    },
    {
      q: 'アカウントを削除するには？',
      a: '設定で「アカウントを削除」をタップし、パスワードで確認します。アカウントとすべてのデータが完全に削除されます。ログインできない場合は、メールでご連絡いただければこちらで削除します。',
    },
    {
      q: '対応している端末は？',
      a: 'Athlethium は iPhone と Android スマートフォンでご利用いただけます。',
    },
  ],
};

export const support: Record<Lang, SupportCopy> = { en, es, fr, de, it, ja };

/** The support page for a language: `/support` for English, `/es/support` and so on. */
export const supportPath = (lang: Lang) => (lang === 'en' ? '/support' : `/${lang}/support`);
