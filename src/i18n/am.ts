/**
 * Amharic translations, keyed by the exact English text used in the UI.
 * Any string missing here falls back to English.
 */

// Photo labels like "Wedding moment 7" (the marquee numbers its photos).
const momentLabels = Object.fromEntries(
  Array.from({ length: 40 }, (_, i) => [`Wedding moment ${i + 1}`, `የሠርግ አፍታ ${i + 1}`]),
);

export const amharic: Record<string, string> = {
  ...momentLabels,

  // ── Couple, dates, welcome page, footer ─────────────────────────────
  "Kaleb": "ካሌብ",
  "Elbethel": "ኤልቤቴል",
  "#KalebAndElbethelForever": "#ካሌብእናኤልቤቴልለዘላለም",
  "Kaleb and Elbethel, back to welcome": "ካሌብ እና ኤልቤቴል፣ ወደ መነሻ",
  "Kaleb and Elbethel at their celebration": "ካሌብ እና ኤልቤቴል በበዓላቸው",
  "Nov 15 , 2026": "ኅዳር 6፣ 2019 ዓ.ም",
  "November 15, 2026": "ኅዳር 6፣ 2019 ዓ.ም",
  "Open invitation": "ግብዣውን ክፈት",
  "Wedding invitation": "የሠርግ ግብዣ",
  "Made by": "የተሠራው በ",

  // ── Navigation, header, controls ───────────────────────────────────
  "Home": "መነሻ", "Our Story": "ታሪካችን", "About Us": "ስለ እኛ", "Gallery": "የፎቶ ማዕከል",
  "Guest Gallery": "የእንግዶች ፎቶዎች", "RSVP": "መገኘትዎን ያረጋግጡ", "Gifts": "ስጦታዎች",
  "Location": "ቦታ", "Wishes": "መልካም ምኞቶች", "Calendar": "ቀን መቁጠሪያ",
  "Schedule": "መርሐ ግብር", "Films": "ፊልሞች", "Story": "ታሪክ", "Prayer": "ጸሎት",
  "RSVP now": "መገኘትዎን ያረጋግጡ", "Open menu": "ዝርዝሩን ክፈት", "Close menu": "ዝርዝሩን ዝጋ",
  "Main navigation": "ዋና ዝርዝር", "Mobile navigation": "የስልክ ዝርዝር", "Footer navigation": "የገጹ መጨረሻ ዝርዝር",
  "Play music": "ሙዚቃ አጫውት", "Pause music": "ሙዚቃ አቁም",
  "Music unavailable. Try again.": "ሙዚቃው አልተጫወተም። እንደገና ይሞክሩ።",
  "Switch to dark mode": "ወደ ጨለማ ገጽታ ቀይር", "Switch to light mode": "ወደ ብርሃን ገጽታ ቀይር",
  "Language": "ቋንቋ", "English": "English", "Amharic": "አማርኛ",

  // ── Hero ───────────────────────────────────────────────────────────
  "Together with their families": "ከቤተሰቦቻቸው ጋር በመሆን",
  "invite you to celebrate the beginning of their forever": "የዘላለም አብሮነታቸውን መጀመሪያ እንዲያከብሩ ይጋብዙዎታል",
  "Addis Ababa": "አዲስ አበባ", "View details": "ዝርዝሩን ይመልከቱ", "Continue to our story": "ወደ ታሪካችን ይቀጥሉ",

  // ── Family invitation ──────────────────────────────────────────────
  "The Big Day": "ታላቁ ቀን", "Wedding Schedule": "የሠርግ መርሐ ግብር",
  "Invitation": "ግብዣ", "Dear Family and Friends": "ውድ ቤተሰቦቻችን እና ጓደኞቻችን",
  '“The Lord alone guided him, no foreign god was with him.”': '“እግዚአብሔር ብቻውን መራው፤ ከእርሱም ጋር የባዕድ አምላክ አልነበረም።”',
  "Deuteronomy 32:12": "ዘዳግም 32፥12",
  "Together with our families, we joyfully invite you to celebrate our marriage on": "ከቤተሰቦቻችን ጋር በመሆን፣ ጋብቻችንን ከእኛ ጋር እንዲያከብሩ በደስታ እንጋብዝዎታለን። ቀኑ",
  "The ceremony will be held at": "የጋብቻ ሥነ ሥርዓቱ የሚካሄደው",
  "The ceremony begins at": "ሥነ ሥርዓቱ የሚጀምረው", "3:00 PM": "ከቀኑ 9፡00 ሰዓት",
  "We would be honored to have you share this special day with us.": "ይህን ልዩ ቀን ከእኛ ጋር ቢያሳልፉ ታላቅ ክብር ይሆንልናል።",

  // ── Countdown, calendar ────────────────────────────────────────────
  "Wedding countdown": "ወደ ሠርጋችን የቀሩ ቀናት", "Counting down to": "በጉጉት እየጠበቅን",
  "Our Wedding Day": "የሠርጋችን ቀን", "Countdown to the wedding": "ወደ ሠርጉ የቀረው ጊዜ",
  "Days": "ቀናት", "Hours": "ሰዓታት", "Minutes": "ደቂቃዎች", "Seconds": "ሰከንዶች",
  "Save the date": "ቀኑን ያስታውሱ", "When & Where": "መቼ እና የት", "Add to calendar": "ወደ ቀን መቁጠሪያ ያክሉ",
  "Sunday": "እሑድ", "Wedding day": "የሠርግ ቀን",
  "Sun": "እሑ", "Mon": "ሰኞ", "Tue": "ማክ", "Wed": "ረቡ", "Thu": "ሐሙ", "Fri": "ዓር", "Sat": "ቅዳ",

  // ── Schedule ───────────────────────────────────────────────────────
  "Morning Photo Session": "የማለዳ የፎቶ ቀረጻ",
  "Groom and bride photo session at the hotel.": "የሙሽራው እና የሙሽራይቱ የፎቶ ቀረጻ በሆቴል።",
  "Lunch Program": "የምሳ ግብዣ",
  "Lunch with guests at the groom’s and bride’s homes.": "ከእንግዶች ጋር ምሳ በሙሽራው እና በሙሽራይቱ ቤት።",
  "Guests Gather": "እንግዶች ይሰበሰባሉ",
  "Guests gather and move to the bride’s house.": "እንግዶች ተሰብስበው ወደ ሙሽራይቱ ቤት ይሄዳሉ።",
  "Church Ceremony": "የቤተ ክርስቲያን ሥነ ሥርዓት",
  "The wedding ceremony at the church.": "የጋብቻ ሥነ ሥርዓቱ በቤተ ክርስቲያን።",
  "Cake Ceremony & Photos": "የኬክ ሥነ ሥርዓት እና ፎቶ",
  "Cake ceremony and photo session at the church.": "የኬክ ሥነ ሥርዓት እና የፎቶ ቀረጻ በቤተ ክርስቲያን።",

  // ── Prayer (About) ─────────────────────────────────────────────────
  "A Prayer for Our Forever": "ለዘላለማችን የቀረበ ጸሎት",
  "May God remain at the center of our marriage, guide our steps, strengthen our love, and fill our home with peace, grace, and joy.":
    "እግዚአብሔር በትዳራችን መካከል ይኑር፤ እርምጃችንን ይምራ፣ ፍቅራችንን ያጠንክር፣ ቤታችንንም በሰላም፣ በጸጋና በደስታ ይሙላ።",
  "May our love grow deeper with every season, and may our lives always reflect His goodness and faithfulness.":
    "ፍቅራችን በየወቅቱ እየጠለቀ ያድግ፤ ሕይወታችንም ሁልጊዜ የእርሱን በጎነትና ታማኝነት ያንጸባርቅ።",
  "Unless the LORD builds the house, the builders labor in vain.":
    "እግዚአብሔር ቤትን ካልሠራ፥ ሠራተኞች በከንቱ ይደክማሉ።",
  "Psalm 127:1": "መዝሙር 127፥1",

  // ── Story ──────────────────────────────────────────────────────────
  "Our story": "ታሪካችን",
  "How it all began": "ሁሉም እንዴት እንደ ተጀመረ",
  "Nine years ago": "ከዘጠኝ ዓመት በፊት",
  "How we met": "እንዴት እንደተገናኘን",
  "Nine years ago, what seemed like an ordinary connection through social media became the beginning of an extraordinary story. We started as friends, sharing conversations and slowly becoming part of each other’s lives, never imagining where this journey would lead.":
    "ከዘጠኝ ዓመት በፊት፣ በማኅበራዊ ሚዲያ የተፈጠረ ተራ የሚመስል ግንኙነት የልዩ ታሪክ መጀመሪያ ሆነ። በጓደኝነት ጀመርን፤ ውይይቶችን እየተካፈልን ቀስ በቀስ የእርስ በርስ ሕይወት አካል ሆንን፤ ይህ ጉዞ ወዴት እንደሚያደርሰን ግን አልገመትንም ነበር።",
  "Kaleb and Elbethel when they first met": "ካሌብ እና ኤልቤቴል በመጀመሪያ ሲገናኙ",
  "Through every season": "በእያንዳንዱ ወቅት",
  "Struggles and patience": "ፈተናዎች እና ትዕግሥት",
  "But every beautiful love story has its own challenges. Before love found its deepest roots, there were struggles, difficult moments, distance, patience, and seasons of uncertainty. It wasn’t always easy, but through every chapter, our story continued to unfold.":
    "ነገር ግን እያንዳንዱ ውብ የፍቅር ታሪክ የራሱ ፈተናዎች አሉት። ፍቅር ጥልቅ ሥር ከመስደዱ በፊት ትግሎች፣ አስቸጋሪ ጊዜያት፣ ርቀት፣ ትዕግሥት እና የጥርጣሬ ወቅቶች ነበሩ። ሁልጊዜ ቀላል አልነበረም፤ ሆኖም በእያንዳንዱ ምዕራፍ ታሪካችን መገለጡን ቀጠለ።",
  "Kaleb and Elbethel through the years": "ካሌብ እና ኤልቤቴል በዓመታት ውስጥ",
  "April 13, 2025 · Miyazya 5, 2017 E.C.": "ሚያዝያ 5 ቀን 2017 ዓ.ም · ኤፕሪል 13፣ 2025",
  "Engagement: she said yes": "የእጮኝነት ቀን፡ እሺ አለች",
  "A beautiful new chapter began when she said YES, turning years of friendship and love into a promise of a lifetime.":
    "እሺ ስትል አዲስ ውብ ምዕራፍ ተጀመረ፤ የዓመታት ጓደኝነትና ፍቅርም የዕድሜ ልክ ቃል ኪዳን ሆነ።",
  "Kaleb and Elbethel on their engagement day": "ካሌብ እና ኤልቤቴል በእጮኝነት ቀናቸው",
  "Tikimt 23, 2018 E.C.": "ጥቅምት 23 ቀን 2018 ዓ.ም",
  "Shemegelna": "ሽምግልና",
  "We took another meaningful step by formally sending the Shemegelna request, honoring our families, our culture, and the traditions passed down through generations. With happiness and blessings, the families accepted, bringing two families together.":
    "ቤተሰቦቻችንን፣ ባህላችንን እና ከትውልድ ወደ ትውልድ የተላለፉ ወጎችን እያከበርን የሽምግልና ጥያቄውን በይፋ በመላክ ሌላ ትርጉም ያለው እርምጃ ወሰድን። በደስታና በምርቃት ቤተሰቦቹ ተቀበሉ፤ ሁለት ቤተሰቦችንም አንድ አደረጉ።",
  "Kaleb and Elbethel with their families at the Shemegelna": "ካሌብ እና ኤልቤቴል ከቤተሰቦቻቸው ጋር በሽምግልና ሥነ ሥርዓት",
  "What began with a simple hello nine years ago has become a journey of love, resilience, commitment, and faith.":
    "ከዘጠኝ ዓመት በፊት በቀላል ሰላምታ የጀመረው ወደ የፍቅር፣ የጽናት፣ የቁርጠኝነት እና የእምነት ጉዞ ተለውጧል።",
  "Through the struggles, we found strength. Through the waiting, we found patience. And through love, we found our way to each other.":
    "በትግሎች ውስጥ ብርታት አገኘን። በጥበቃ ውስጥ ትዕግሥት አገኘን። በፍቅርም አንዳችን ወደ አንዳችን የሚወስደውን መንገድ አገኘን።",
  "Our story is proof that the most beautiful beginnings don’t always come easily, but every chapter can lead to something worth forever.":
    "ታሪካችን ከሁሉ የሚያምሩ ጅማሬዎች ሁልጊዜ በቀላሉ እንደማይመጡ፣ እያንዳንዱ ምዕራፍ ግን ለዘላለም ወደሚያዋጣ ነገር ሊመራ እንደሚችል ማስረጃ ነው።",
  "And this is only the beginning of our forever.": "ይህ የዘላለማችን መጀመሪያ ብቻ ነው።",

  // ── Films ──────────────────────────────────────────────────────────
  "In motion": "በእንቅስቃሴ", "Our Film": "ፊልማችን", "Play film": "ፊልሙን አጫውት",
  "Our wedding film": "የሠርግ ፊልማችን",
  "Your browser does not support video playback.": "አሳሽዎ ቪዲዮ ማጫወትን አይደግፍም።",

  // ── Moments, gallery ───────────────────────────────────────────────
  "Moments": "አፍታዎች", "Captured moments": "የተቀረጹ አፍታዎች", "Our Gallery": "የፎቶ ማዕከላችን",
  "A collection of moments we will cherish forever.": "ለዘላለም የምናስታውሳቸው ውብ አፍታዎች።",
  "Wedding photograph": "የሠርግ ፎቶ", "Close photograph": "ፎቶውን ዝጋ", "Enlarge": "አሳድግ",
  "Previous photograph": "ያለፈው ፎቶ", "Next photograph": "ቀጣዩ ፎቶ",
  "See all photos": "ሁሉንም ፎቶዎች አሳይ", "Show less": "ጥቂቱን አሳይ",

  // ── Guest gallery (Telegram) ───────────────────────────────────────
  "Share the joy": "ደስታውን ያጋሩ",
  "Share a favorite moment from the celebration and help us keep every beautiful memory close.": "ከበዓሉ የወደዱትን አፍታ ያጋሩን፤ እያንዳንዱን ውብ ትዝታ እንድናስቀምጥ ያግዙን።",
  "Share your photos": "ፎቶዎችዎን ያጋሩ",
  "Tap the button and send your photos to our Telegram bot. They will appear in the gallery.":
    "ቁልፉን ነክተው ፎቶዎችዎን ወደ ቴሌግራም ቦታችን ይላኩ። በፎቶ ማዕከሉ ውስጥ ይታያሉ።",
  "Send photos on Telegram": "በቴሌግራም ፎቶ ይላኩ",
  "View all photos": "ሁሉንም ፎቶዎች ይመልከቱ",
  "Close photographs": "ፎቶዎቹን ዝጋ",
  "Guest photographs": "የእንግዶች ፎቶዎች",
  "Photos shared by guests through Telegram": "እንግዶች በቴሌግራም ያጋሯቸው ፎቶዎች",
  "Loading photos...": "ፎቶዎች በመጫን ላይ…",
  "Could not load photos. Please try again later.": "ፎቶዎቹን መጫን አልተቻለም። እባክዎ ቆይተው እንደገና ይሞክሩ።",
  "No photos have been shared yet.": "እስካሁን ምንም ፎቶ አልተጋራም።",
  "Guest photograph": "የእንግዳ ፎቶ",
  "Download": "አውርድ",
  "Shared by": "የተጋራው በ",

  // ── RSVP ───────────────────────────────────────────────────────────
  "Kindly reply": "እባክዎ ይመልሱ", "Will you": "ከእኛ ጋር", "join us?": "ይሆናሉ?",
  "We hope to celebrate with you. Please respond by July 1, 2027.": "ከእርስዎ ጋር ለማክበር እንጓጓለን። እባክዎ እስከ ጁላይ 1፣ 2027 ድረስ ይመልሱ።",
  "Wedding rings and burgundy stationery": "የሠርግ ቀለበቶች እና ወይን ቀይ ግብዣዎች",
  "Your reply is received.": "ምላሽዎ ደርሶናል።",
  "We are delighted you’ll be celebrating with us.": "ከእኛ ጋር ስለሚያከብሩ በጣም ተደስተናል።",
  "You will be missed, and we’re grateful you let us know.": "እናስታውስዎታለን፤ ስላሳወቁንም እናመሰግናለን።",
  "Update response": "ምላሽዎን ያስተካክሉ",
  "Your name": "ስምዎ", "Full name": "ሙሉ ስም",
  "Will you be attending?": "በሥነ ሥርዓቱ ይገኛሉ?",
  "Joyfully accepts": "በደስታ እገኛለሁ", "Regretfully declines": "በሐዘን አልገኝም",
  "Your wish for the couple": "ለጥንዶቹ ምኞትዎ",
  "Share a wish…": "ምኞትዎን ያጋሩ…",
  "Send RSVP": "ምላሽ ይላኩ", "Sending...": "በመላክ ላይ…",
  "Something went wrong. Please try again.": "የሆነ ችግር ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።",

  // ── Gift registry ──────────────────────────────────────────────────
  "With gratitude": "በምስጋና", "Gift Registry": "ስጦታዎች",
  "Your presence is the greatest gift of all. Thank you for celebrating this beautiful chapter with us.": "መገኘትዎ ከሁሉ ታላቅ ስጦታ ነው። ይህን ውብ ምዕራፍ ከእኛ ጋር ስለሚያከብሩ እናመሰግናለን።",
  "Send a gift": "ስጦታ ይላኩ",
  "Bank transfer": "የባንክ ዝውውር",
  "Awash Bank": "አዋሽ ባንክ",
  "Commercial Bank of Ethiopia (CBE)": "የኢትዮጵያ ንግድ ባንክ (CBE)",
  "Account number": "የሒሳብ ቁጥር",
  "Copy account number": "የሒሳብ ቁጥር ቅዳ",
  "Copied!": "ተቀድቷል!",
  "Account number copied": "የሒሳብ ቁጥሩ ተቀድቷል",
  "Hide details": "ዝርዝሩን ደብቅ",

  // ── Wishes ─────────────────────────────────────────────────────────
  "Messages from Guests": "የእንግዶች መልዕክቶች", "Guest messages": "የእንግዶች መልዕክቶች",
  "View all messages": "ሁሉንም መልዕክቶች ይመልከቱ", "Close messages": "መልዕክቶቹን ዝጋ",
  "From those we love": "ከምንወዳቸው ሰዎች",
  "Warm Wishes": "ሞቅ ያሉ ምኞቶች", "Wishes from friends and family": "ከጓደኞች እና ከቤተሰብ መልካም ምኞቶች",
  "Loading messages...": "መልዕክቶች በመጫን ላይ…",
  "Could not load messages. Please try again later.": "መልዕክቶቹን መጫን አልተቻለም። እባክዎ ቆይተው እንደገና ይሞክሩ።",
  "No messages yet. Be the first to send a wish! 💌": "እስካሁን መልዕክት የለም። ምኞትዎን በመላክ የመጀመሪያው ይሁኑ! 💌",
  "NOV 15, 2026": "ኅዳር 6 ቀን 2019 ዓ.ም",
  "Reppi Full Gospel Church (Kara Kore)": "ሬፒ ሙሉ ወንጌል ቤተ ክርስቲያን (ካራ ቆሬ)",
  "A cord of three strands is not quickly broken.": "ሦስት ፈትል ያለው ገመድ ፈጥኖ አይበጠስም።",
  "Ecclesiastes 4:12": "መክብብ 4፥12",
  // ── Venue / locations ──────────────────────────────────────────────
  "Venue": "የሥነ ሥርዓቱ ቦታ", "Locations": "ቦታዎች", "Find us": "ያግኙን",
  "Groom’s House": "የሙሽራው ቤት", "Bride’s House": "የሙሽራይቱ ቤት", "Church": "ቤተ ክርስቲያን",
  "Map": "ካርታ", "Choose a location": "ቦታ ይምረጡ",
};