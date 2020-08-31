Start
    = a:Sentence_conjunction? b:Sentence cs:(Sentence_conjunction Sentence)* {
        return {name:"text", children:[a, b].concat(cs)};
    }

Sentence
    = a:Adverb0_phrase? b:Verb4_phrase c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? j:Argument0 k:Adverb0_phrase? { // VSOOO
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Verb4_phrase e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? j:Argument0 k:Adverb0_phrase? { // SVOOO
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Verb4_phrase g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? j:Argument0 k:Adverb0_phrase? { // SOVOO
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Verb4_phrase i:Adverb0_phrase? j:Argument0 k:Adverb0_phrase? { // SOOVO
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? j:Verb4_phrase k:Adverb0_phrase? { // SOOOV
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Verb3_phrase c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? { // VSOO
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Verb3_phrase e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? { // SVOO
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Verb3_phrase g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? { // SOVO
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Verb3_phrase i:Adverb0_phrase? { // SOOV
        return {name:"sentence", children:[a, b, c, d, e, f, g, h, i]};
    }
    / a:Adverb0_phrase? b:Verb2_phrase c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? { // VSO
        return {name:"sentence", children:[a, b, c, d, e, f, g]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Verb2_phrase e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? { // SVO
        return {name:"sentence", children:[a, b, c, d, e, f, g]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Verb2_phrase g:Adverb0_phrase? { // SOV
        return {name:"sentence", children:[a, b, c, d, e, f, g]};
    }
    / a:Adverb0_phrase? b:Verb1_phrase c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? { // VS
        return {name:"sentence", children:[a, b, c, d, e]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Verb1_phrase e:Adverb0_phrase? { // SV
        return {name:"sentence", children:[a, b, c, d, e]};
    }
    / a:Adverb0_phrase? b:Verb0_phrase c:Adverb0_phrase? { // V
        return {name:"sentence", children:[a, b, c]};
    }
    / a:Argument0 { // S
        return {name:"sentence", children:[a]};
    }
    / a:Interjection {
        return {name:"sentence", children:[a]};
    }

Verb0_phrase
    = a:Negation? b:Verb0 {
        return {name:"verb phrase, valency=0", children:[a, b]};
    }

Adverb0_phrase
    = a:Adverb0_phrase_single bs:(Adverb0_conjunction? Adverb0_phrase_single)* {
        return {name:"adverb phrase, level=0", children:[a].concat(bs)};
    }

Adverb0_phrase_single
    = a:Negation? bs:( Adverb0
        / Preposition Argument0
        / Superlative_adverb Adverb0
        / Comparative_adverb Adverb0 (Comparative_conjunction Sentence Subsentence_end?)?
    ) c:Adverb1_phrase? {
        return {name:"adverb phrase without conjunctions, level=0", children:[a].concat(bs).concat(c)};
    }

Argument0
    = (Noun0_phrase / Infinitive0_phrase / Gerund0_phrase) (Argument0_conjunction (Noun0_phrase / Infinitive0_phrase / Gerund0_phrase))*

