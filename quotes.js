function getQuote() {
    var randNum = Math.floor(Math.random() * englishQuotes.length);
    document.getElementById('quoteE').innerHTML = englishQuotes[randNum];
    document.getElementById('quoteH').innerHTML = hindiQuotes[randNum];
}

var englishQuotes = [
    `"Our primary motivation for organizing this gathering today was to center the question of caste and brahmanism in understanding policing and carcerality in the Indian context, not just as an aspect of power in India, but as the genesis of power. And embracing policing, not just in terms of the way that we formally understand policing as being confined to the police department or departments, but as a way of being, which is rooted in casteist carceral forms of disciplining.” - Nikita` ,
    `“How do you feel invited into complicity with brahminism and/or whiteness in your everyday life?” - Lilly + Palashi`,
    `“Global solidarity building is the work of continuous translation” - Palashi`,
    `“caste is the corporeal connection. You’re dissecting the body of more than a human being to determine who belongs to what caste — there’s a different relationship with the body in terms of race.” - Lilly`,
    `“ This system of surveillance was replete with laws... It was not only about the governing law. Brahmins and white people were deputized to police people and enact violence if they didn’t comply with social and legal rules.” - Sareeta`,
    `“If tech serves devaluing human life and is then combined with something as old as the caste system, the combination is powerful, and that combination is what we see in Hyderabad and Telangana. “ - Sucheta`,
    `“Silicon Valley is a place that is in fact everywhere. There are Silicon Valleys in Berlin and Romania, so you can think of Silicon Valleys as places that produce a particular idea or intent toward tech” - Sareeta`,
    `“It would mean an end to policing, not just the police but policing each other on another level, I’m thinking about how the discipline of something like anthropology would not exist... the binary of who the researcher and the research is would probably not exist anymore because you would have nobody from outside within a particular group coming into write about someone else, which at the end of it is also a form of surveillance.” - Mrialini`,
    `“the way that we inhabit systems of surveillance is rooted in the idea of the family” - Nikita`,
    `“People that were speaking about not being represented in the room and he says that it’s important that we have them in the room and learn from their life experiences and allow them to express their own experiences” - Sandesh`,
    `“every liberation struggle is place-based. I keep thinking about it in terms of the abolition movement in America ...how do we think about that in the Indian context?” - Himanshu`,
    `“How do we better understand each other's contexts?” - Sagar`,
    `“We were inadvertently fallen into the same trap of beginning from the possibility or beginning from the assumption that there was a parallel to be drawn between racial and casteist policing” - Nikita`
]


var hindiQuotes = [
    `"Our primary motivation for organizing this gathering today was to center the question of caste and brahmanism in understanding policing and carcerality in the Indian context, not just as an aspect of power in India, but as the genesis of power. And embracing policing, not just in terms of the way that we formally understand policing as being confined to the police department or departments, but as a way of being, which is rooted in casteist carceral forms of disciplining.” - Nikita` ,
    `“How do you feel invited into complicity with brahminism and/or whiteness in your everyday life?” - Lilly + Palashi`,
    `“Global solidarity building is the work of continuous translation” - Palashi`,
    `“caste is the corporeal connection. You’re dissecting the body of more than a human being to determine who belongs to what caste — there’s a different relationship with the body in terms of race.” - Lilly`,
    `“ This system of surveillance was replete with laws... It was not only about the governing law. Brahmins and white people were deputized to police people and enact violence if they didn’t comply with social and legal rules.” - Sareeta`,
    `“If tech serves devaluing human life and is then combined with something as old as the caste system, the combination is powerful, and that combination is what we see in Hyderabad and Telangana. “ - Sucheta`,
    `“Silicon Valley is a place that is in fact everywhere. There are Silicon Valleys in Berlin and Romania, so you can think of Silicon Valleys as places that produce a particular idea or intent toward tech” - Sareeta`,
    `“It would mean an end to policing, not just the police but policing each other on another level, I’m thinking about how the discipline of something like anthropology would not exist... the binary of who the researcher and the research is would probably not exist anymore because you would have nobody from outside within a particular group coming into write about someone else, which at the end of it is also a form of surveillance.” - Mrialini`,
    `“the way that we inhabit systems of surveillance is rooted in the idea of the family” - Nikita`,
    `“People that were speaking about not being represented in the room and he says that it’s important that we have them in the room and learn from their life experiences and allow them to express their own experiences” - Sandesh`,
    `“every liberation struggle is place-based. I keep thinking about it in terms of the abolition movement in America ...how do we think about that in the Indian context?” - Himanshu`,
    `“How do we better understand each other's contexts?” - Sagar`,
    `“We were inadvertently fallen into the same trap of beginning from the possibility or beginning from the assumption that there was a parallel to be drawn between racial and casteist policing” - Nikita`
]
    
  