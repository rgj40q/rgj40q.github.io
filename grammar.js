

const grammar = String.raw`

Start
    = a:Sentence_conjunction? b:Sentence cs:(Sentence_conjunction Sentence)* {
        return {name:"[text]", children:[a, b].concat(cs)};
    }

Sentence
    = a:Adverb0_phrase? b:Verb4_phrase c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? j:Argument0 k:Adverb0_phrase? { // VSOOO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Verb4_phrase e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? j:Argument0 k:Adverb0_phrase? { // SVOOO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Verb4_phrase g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? j:Argument0 k:Adverb0_phrase? { // SOVOO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Verb4_phrase i:Adverb0_phrase? j:Argument0 k:Adverb0_phrase? { // SOOVO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? j:Verb4_phrase k:Adverb0_phrase? { // SOOOV
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i, j, k]};
    }
    / a:Adverb0_phrase? b:(Verb3_phrase/Verb4_phrase) c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? { // VSOO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:(Verb3_phrase/Verb4_phrase) e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? { // SVOO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:(Verb3_phrase/Verb4_phrase) g:Adverb0_phrase? h:Argument0 i:Adverb0_phrase? { // SOVO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? h:(Verb3_phrase/Verb4_phrase) i:Adverb0_phrase? { // SOOV
        return {name:"[sentence]", children:[a, b, c, d, e, f, g, h, i]};
    }
    / a:Adverb0_phrase? b:(Verb2_phrase/Verb3_phrase/Verb4_phrase) c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? { // VSO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:(Verb2_phrase/Verb3_phrase/Verb4_phrase) e:Adverb0_phrase? f:Argument0 g:Adverb0_phrase? { // SVO
        return {name:"[sentence]", children:[a, b, c, d, e, f, g]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? f:(Verb2_phrase/Verb3_phrase/Verb4_phrase) g:Adverb0_phrase? { // SOV
        return {name:"[sentence]", children:[a, b, c, d, e, f, g]};
    }
    / a:Adverb0_phrase? b:(Verb1_phrase/Verb2_phrase/Verb3_phrase/Verb4_phrase) c:Adverb0_phrase? d:Argument0 e:Adverb0_phrase? { // VS
        return {name:"[sentence]", children:[a, b, c, d, e]};
    }
    / a:Adverb0_phrase? b:Argument0 c:Adverb0_phrase? d:(Verb1_phrase/Verb2_phrase/Verb3_phrase/Verb4_phrase) e:Adverb0_phrase? { // SV
        return {name:"[sentence]", children:[a, b, c, d, e]};
    }
    / a:Adverb0_phrase? b:(Verb0_phrase/Verb1_phrase/Verb2_phrase/Verb3_phrase/Verb4_phrase) c:Adverb0_phrase? { // V
        return {name:"[sentence]", children:[a, b, c]};
    }
    / a:Argument0 { // S
        return {name:"[sentence]", children:[a]};
    }
    / a:Interjection {
        return {name:"[sentence]", children:[a]};
    }

Verb0_phrase
    = a:Negation? b:Verb0 {
        return {name:"[verb phrase, valency=0]", children:[a, b]};
    }

Verb1_phrase
    = a:Negation? b:Verb1 {
        return {name:"[verb phrase, valency=1]", children:[a, b]};
    }

Verb2_phrase
    = a:Negation? b:Verb2 {
        return {name:"[verb phrase, valency=2]", children:[a, b]};
    }

Verb3_phrase
    = a:Negation? b:Verb3 {
        return {name:"[verb phrase, valency=3]", children:[a, b]};
    }

Verb4_phrase
    = a:Negation? b:Verb4 {
        return {name:"[verb phrase, valency=4]", children:[a, b]};
    }

Adverb0_phrase
    = a:Adverb0_phrase_single bs:(Adverb0_conjunction? Adverb0_phrase_single)* {
        return {name:"[adverb phrase, level=0]", children:[a].concat(bs)};
    }

Adverb1_phrase
    = a:Adverb1_phrase_single bs:(Adverb1_conjunction? Adverb1_phrase_single)* {
        return {name:"[adverb phrase, level=1]", children:[a].concat(bs)};
    }

Adverb2_phrase
    = a:Adverb2_phrase_single bs:(Adverb2_conjunction? Adverb2_phrase_single)* {
        return {name:"[adverb phrase, level=2]", children:[a].concat(bs)};
    }

Adverb3_phrase
    = a:Adverb3_phrase_single bs:(Adverb3_conjunction? Adverb3_phrase_single)* {
        return {name:"[adverb phrase, level=3]", children:[a].concat(bs)};
    }

Adverb0_phrase_single
    = a:Negation? b:Adverb0_valency1 c:Adverb1_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=0, valency=1]", children:[a, b, c]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb0_valency1 {
        return {name:"[adverb phrase, conjunctionless, superlative, level=0, valency=1]", children:[a, b, c]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb0_valency1 ds:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=0, valency=1]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Adverb0_valency2 c:Argument1? d:Adverb1_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=0, valency=2]", children:[a, b, c, d]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb0_valency2 d:Argument1? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=0, valency=2]", children:[a, b, c, d]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb0_valency2 d:Argument1? es:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=0, valency=2]", children:[a, b, c, d].concat(es)};
    }
    / a:Negation? b:Adverb0_valency3 c:Argument1? d:Argument1? e:Adverb1_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=0, valency=3]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb0_valency3 d:Argument1? e:Argument1? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=0, valency=3]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb0_valency3 d:Argument1? e:Argument1? fs:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=0, valency=3]", children:[a, b, c, d, e].concat(fs)};
    }
    / a:Negation? b:Adverb0_valency4 c:Argument1? d:Argument1? e:Argument1? f:Adverb1_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=0, valency=4]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb0_valency4 d:Argument1? e:Argument1? f:Argument1? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=0, valency=4]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb0_valency4 d:Argument1? e:Argument1? f:Argument1? gs:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=0, valency=4]", children:[a, b, c, d, e, f].concat(gs)};
    }

Adverb1_phrase_single
    = a:Negation? b:Adverb1_valency1 c:Adverb2_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=1, valency=1]", children:[a, b, c]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb1_valency1 {
        return {name:"[adverb phrase, conjunctionless, superlative, level=1, valency=1]", children:[a, b, c]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb1_valency1 ds:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=1, valency=1]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Adverb1_valency2 c:Argument2? d:Adverb2_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=1, valency=2]", children:[a, b, c, d]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb1_valency2 d:Argument2? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=1, valency=2]", children:[a, b, c, d]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb1_valency2 d:Argument2? es:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=1, valency=2]", children:[a, b, c, d].concat(es)};
    }
    / a:Negation? b:Adverb1_valency3 c:Argument2? d:Argument2? e:Adverb2_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=1, valency=3]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb1_valency3 d:Argument2? e:Argument2? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=1, valency=3]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb1_valency3 d:Argument2? e:Argument2? fs:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=1, valency=3]", children:[a, b, c, d, e].concat(fs)};
    }
    / a:Negation? b:Adverb1_valency4 c:Argument2? d:Argument2? e:Argument2? f:Adverb2_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=1, valency=4]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb1_valency4 d:Argument2? e:Argument2? f:Argument2? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=1, valency=4]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb1_valency4 d:Argument2? e:Argument2? f:Argument2? gs:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=1, valency=4]", children:[a, b, c, d, e, f].concat(gs)};
    }

Adverb2_phrase_single
    = a:Negation? b:Adverb2_valency1 c:Adverb3_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=2, valency=1]", children:[a, b, c]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb2_valency1 {
        return {name:"[adverb phrase, conjunctionless, superlative, level=2, valency=1]", children:[a, b, c]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb2_valency1 ds:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=2, valency=1]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Adverb2_valency2 c:Argument3? d:Adverb3_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=2, valency=2]", children:[a, b, c, d]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb2_valency2 d:Argument3? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=2, valency=2]", children:[a, b, c, d]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb2_valency2 d:Argument3? es:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=2, valency=2]", children:[a, b, c, d].concat(es)};
    }
    / a:Negation? b:Adverb2_valency3 c:Argument3? d:Argument3? e:Adverb3_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=2, valency=3]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb2_valency3 d:Argument3? e:Argument3? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=2, valency=3]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb2_valency3 d:Argument3? e:Argument3? fs:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=2, valency=3]", children:[a, b, c, d, e].concat(fs)};
    }
    / a:Negation? b:Adverb2_valency4 c:Argument3? d:Argument3? e:Argument3? f:Adverb3_phrase? {
        return {name:"[adverb phrase, conjunctionless, level=2, valency=4]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb2_valency4 d:Argument3? e:Argument3? f:Argument3? {
        return {name:"[adverb phrase, conjunctionless, superlative, level=2, valency=4]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb2_valency4 d:Argument3? e:Argument3? f:Argument3? gs:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=2, valency=4]", children:[a, b, c, d, e, f].concat(gs)};
    }

Adverb3_phrase_single
    = a:Negation? b:Adverb3_valency1 {
        return {name:"[adverb phrase, conjunctionless, level=3, valency=1]", children:[a, b]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb3_valency1 {
        return {name:"[adverb phrase, conjunctionless, superlative, level=3, valency=1]", children:[a, b, c]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb3_valency1 ds:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=3, valency=1]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Adverb3_valency2 {
        return {name:"[adverb phrase, conjunctionless, level=3, valency=2]", children:[a, b]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb3_valency2 {
        return {name:"[adverb phrase, conjunctionless, superlative, level=3, valency=2]", children:[a, b, c]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb3_valency2 ds:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=3, valency=2]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Adverb3_valency3 {
        return {name:"[adverb phrase, conjunctionless, level=3, valency=3]", children:[a, b]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb3_valency3 {
        return {name:"[adverb phrase, conjunctionless, superlative, level=3, valency=3]", children:[a, b, c]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb3_valency3 ds:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=3, valency=3]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Adverb3_valency4 {
        return {name:"[adverb phrase, conjunctionless, level=3, valency=4]", children:[a, b]};
    }
    / a:Negation? b:Superlative_adverb c:Adverb3_valency4 {
        return {name:"[adverb phrase, conjunctionless, superlative, level=3, valency=4]", children:[a, b, c]};
    }
    / a:Negation? b:Comparative_adverb c:Adverb3_valency4 ds:(Comparative_conjunction Sentence Subsentence_end)? {
        return {name:"[adverb phrase, conjunctionless, comparative, level=3, valency=4]", children:[a, b, c].concat(ds)};
    }

Argument0
    = a:Argument0_single bs:(Argument0_conjunction Argument0_single)* {
        return {name:"[argument, level=0]", children:[a].concat(bs)};
    }

Argument1
    = a:Argument1_single bs:(Argument1_conjunction Argument1_single)* {
        return {name:"[argument, level=1]", children:[a].concat(bs)};
    }

Argument2
    = a:Argument2_single bs:(Argument2_conjunction Argument2_single)* {
        return {name:"[argument, level=2]", children:[a].concat(bs)};
    }

Argument3
    = a:Argument3_single bs:(Argument3_conjunction Argument3_single)* {
        return {name:"[argument, level=3]", children:[a].concat(bs)};
    }

Argument0_single
    = a:Noun0_phrase {
        return {name:"[argument, conjunctionless, level=0]", children:[a]};
    }
    / a:Gerund0_phrase {
        return {name:"[argument, conjunctionless, level=0]", children:[a]};
    }

Argument1_single
    = a:Noun1_phrase {
        return {name:"[argument, conjunctionless, level=1]", children:[a]};
    }
    / a:Gerund1_phrase {
        return {name:"[argument, conjunctionless, level=1]", children:[a]};
    }

Argument2_single
    = a:Noun2_phrase {
        return {name:"[argument, conjunctionless, level=2]", children:[a]};
    }
    / a:Gerund2_phrase {
        return {name:"[argument, conjunctionless, level=2]", children:[a]};
    }

Argument3_single
    = a:Noun3_phrase {
        return {name:"[argument, conjunctionless, level=3]", children:[a]};
    }
    / a:Gerund3_phrase {
        return {name:"[argument, conjunctionless, level=3]", children:[a]};
    }

Noun0_phrase
    = a:Negation? b:Noun0_valency1 c:Adverb1_phrase? ds:Apposition0_phrase* {
        return {name:"[noun phrase, valency=1, level=0]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Noun0_valency2 c:Argument1? d:Adverb1_phrase? es:Apposition0_phrase* {
        return {name:"[noun phrase, valency=2, level=0]", children:[a, b, c, d].concat(es)};
    }
    / a:Negation? b:Noun0_valency3 c:Argument1? d:Argument1? e:Adverb1_phrase? fs:Apposition0_phrase* {
        return {name:"[noun phrase, valency=3, level=0]", children:[a, b, c, d, e].concat(fs)};
    }
    / a:Negation? b:Noun0_valency4 c:Argument1? d:Argument1? e:Argument1? f:Adverb1_phrase? gs:Apposition0_phrase* {
        return {name:"[noun phrase, valency=4, level=0]", children:[a, b, c, d, e, f].concat(gs)};
    }

Noun1_phrase
    = a:Negation? b:Noun1_valency1 c:Adverb2_phrase? ds:Apposition1_phrase* {
        return {name:"[noun phrase, valency=1, level=1]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Noun1_valency2 c:Argument2? d:Adverb2_phrase? es:Apposition1_phrase* {
        return {name:"[noun phrase, valency=2, level=1]", children:[a, b, c, d].concat(es)};
    }
    / a:Negation? b:Noun1_valency3 c:Argument2? d:Argument2? e:Adverb2_phrase? fs:Apposition1_phrase* {
        return {name:"[noun phrase, valency=3, level=1]", children:[a, b, c, d, e].concat(fs)};
    }
    / a:Negation? b:Noun1_valency4 c:Argument2? d:Argument2? e:Argument2? f:Adverb2_phrase? gs:Apposition1_phrase* {
        return {name:"[noun phrase, valency=4, level=1]", children:[a, b, c, d, e, f].concat(gs)};
    }

Noun2_phrase
    = a:Negation? b:Noun2_valency1 c:Adverb3_phrase? ds:Apposition2_phrase* {
        return {name:"[noun phrase, valency=1, level=2]", children:[a, b, c].concat(ds)};
    }
    / a:Negation? b:Noun2_valency2 c:Argument3? d:Adverb3_phrase? es:Apposition2_phrase* {
        return {name:"[noun phrase, valency=2, level=2]", children:[a, b, c, d].concat(es)};
    }
    / a:Negation? b:Noun2_valency3 c:Argument3? d:Argument3? e:Adverb3_phrase? fs:Apposition2_phrase* {
        return {name:"[noun phrase, valency=3, level=2]", children:[a, b, c, d, e].concat(fs)};
    }
    / a:Negation? b:Noun2_valency4 c:Argument3? d:Argument3? e:Argument3? f:Adverb3_phrase? gs:Apposition2_phrase* {
        return {name:"[noun phrase, valency=4, level=2]", children:[a, b, c, d, e, f].concat(gs)};
    }

Noun3_phrase
    = a:Negation? b:(Noun3_valency1 / Noun3_valency2 / Noun3_valency3 / Noun3_valency4) cs:Apposition3_phrase* {
        return {name:"[noun phrase, level=3]", children:[a, b].concat(cs)};
    }

Gerund0_phrase
    = a:Negation? b:Gerund0_valency0 c:Adverb1_phrase? {
        return {name:"[gerund phrase, valency=0, level=0]", children:[a, b, c]};
    }
    / a:Negation? b:Gerund0_valency1 c:Argument1? d:Adverb1_phrase? {
        return {name:"[gerund phrase, valency=1, level=0]", children:[a, b, c, d]};
    }
    / a:Negation? b:Gerund0_valency2 c:Argument1? d:Argument1? e:Adverb1_phrase? {
        return {name:"[gerund phrase, valency=2, level=0]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Gerund0_valency3 c:Argument1? d:Argument1? e:Argument1? f:Adverb1_phrase? {
        return {name:"[gerund phrase, valency=3, level=0]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Gerund0_valency4 c:Argument1? d:Argument1? e:Argument1? f:Argument1? g:Adverb1_phrase? {
        return {name:"[gerund phrase, valency=4, level=0]", children:[a, b, c, d, e, f, g]};
    }

Gerund1_phrase
    = a:Negation? b:Gerund1_valency0 c:Adverb2_phrase? {
        return {name:"[gerund phrase, valency=0, level=1]", children:[a, b, c]};
    }
    / a:Negation? b:Gerund1_valency1 c:Argument2? d:Adverb2_phrase? {
        return {name:"[gerund phrase, valency=1, level=1]", children:[a, b, c, d]};
    }
    / a:Negation? b:Gerund1_valency2 c:Argument2? d:Argument2? e:Adverb2_phrase? {
        return {name:"[gerund phrase, valency=2, level=1]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Gerund1_valency3 c:Argument2? d:Argument2? e:Argument2? f:Adverb2_phrase? {
        return {name:"[gerund phrase, valency=3, level=1]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Gerund1_valency4 c:Argument2? d:Argument2? e:Argument2? f:Argument2? g:Adverb2_phrase? {
        return {name:"[gerund phrase, valency=4, level=1]", children:[a, b, c, d, e, f, g]};
    }

Gerund2_phrase
    = a:Negation? b:Gerund2_valency0 c:Adverb3_phrase? {
        return {name:"[gerund phrase, valency=0, level=2]", children:[a, b, c]};
    }
    / a:Negation? b:Gerund2_valency1 c:Argument3? d:Adverb3_phrase? {
        return {name:"[gerund phrase, valency=1, level=2]", children:[a, b, c, d]};
    }
    / a:Negation? b:Gerund2_valency2 c:Argument3? d:Argument3? e:Adverb3_phrase? {
        return {name:"[gerund phrase, valency=2, level=2]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Gerund2_valency3 c:Argument3? d:Argument3? e:Argument3? f:Adverb3_phrase? {
        return {name:"[gerund phrase, valency=3, level=2]", children:[a, b, c, d, e, f]};
    }
    / a:Negation? b:Gerund2_valency4 c:Argument3? d:Argument3? e:Argument3? f:Argument3? g:Adverb3_phrase? {
        return {name:"[gerund phrase, valency=4, level=2]", children:[a, b, c, d, e, f, g]};
    }

Gerund3_phrase
    = a:Negation? b:(Gerund3_valency0 / Gerund3_valency1 / Gerund3_valency2 / Gerund3_valency3 / Gerund3_valency4) {
        return {name:"[gerund phrase, level=3]", children:[a, b]};
    }

Apposition0_phrase
    = a:Negation? b:Apposition0_valency1 c:Adverb1_phrase? {
        return {name:"[apposition phrase, valency=1, level=0]", children:[a, b, c]};
    }
    / a:Negation? b:Apposition0_valency2 c:Argument1? d:Adverb1_phrase?{
        return {name:"[apposition phrase, valency=2, level=0]", children:[a, b, c, d]};
    }
    / a:Negation? b:Apposition0_valency3 c:Argument1? d:Argument1? e:Adverb1_phrase? {
        return {name:"[apposition phrase, valency=3, level=0]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Apposition0_valency4 c:Argument1? d:Argument1? e:Argument1? f:Adverb1_phrase? {
        return {name:"[apposition phrase, valency=4, level=0]", children:[a, b, c, d, e, f]};
    }

Apposition1_phrase
    = a:Negation? b:Apposition1_valency1 c:Adverb2_phrase? {
        return {name:"[apposition phrase, valency=1, level=1]", children:[a, b, c]};
    }
    / a:Negation? b:Apposition1_valency2 c:Argument2? d:Adverb2_phrase?{
        return {name:"[apposition phrase, valency=2, level=1]", children:[a, b, c, d]};
    }
    / a:Negation? b:Apposition1_valency3 c:Argument2? d:Argument2? e:Adverb2_phrase? {
        return {name:"[apposition phrase, valency=3, level=1]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Apposition1_valency4 c:Argument2? d:Argument2? e:Argument2? f:Adverb2_phrase? {
        return {name:"[apposition phrase, valency=4, level=1]", children:[a, b, c, d, e, f]};
    }


Apposition2_phrase
    = a:Negation? b:Apposition2_valency1 c:Adverb3_phrase? {
        return {name:"[apposition phrase, valency=1, level=2]", children:[a, b, c]};
    }
    / a:Negation? b:Apposition2_valency2 c:Argument3? d:Adverb3_phrase?{
        return {name:"[apposition phrase, valency=2, level=2]", children:[a, b, c, d]};
    }
    / a:Negation? b:Apposition2_valency3 c:Argument3? d:Argument3? e:Adverb3_phrase? {
        return {name:"[apposition phrase, valency=3, level=2]", children:[a, b, c, d, e]};
    }
    / a:Negation? b:Apposition2_valency4 c:Argument3? d:Argument3? e:Argument3? f:Adverb3_phrase? {
        return {name:"[apposition phrase, valency=4, level=2]", children:[a, b, c, d, e, f]};
    }

Apposition3_phrase
    = a:Negation? b:(Apposition3_valency1 / Apposition3_valency2 / Apposition3_valency3 / Apposition3_valency4) {
        return {name:"[apposition phrase, level=3]", children:[a, b]};
    }

Verb0
    = a:Stem0 b:Verb_suffix Whitespace {
        return {name:("<b>" + a + b + "</b>: verb, valency=0, definition: " + parseStem(a)), children:[]}
    }

Verb1
    = a:Stem1 b:Verb_suffix Whitespace {
        return {name:("<b>" + a + b + "</b>: verb, valency=1, definition: " + parseStem(a)), children:[]};
    }

Verb2
    = a:Stem2 b:Verb_suffix Whitespace {
        return {name:("<b>" + a + b + "</b>: verb, valency=2, definition: " + parseStem(a)), children:[]};
    }

Verb3
    = a:Stem3 b:Verb_suffix Whitespace {
        return {name:("<b>" + a + b + "</b>: verb, valency=3, definition: " + parseStem(a)), children:[]};
    }

Verb4
    = a:Stem4 b:Verb_suffix Whitespace {
        return {name:("<b>" + a + b + "</b>: verb, valency=4, definition: " + parseStem(a)), children:[]};
    }

Noun0_valency1 = a:Stem1 b:Noun_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=1, level=0, definition: " + parseStem(a)), children:[]};
    }

Noun0_valency2 = a:Stem2 b:Noun_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=2, level=0, definition: " + parseStem(a)), children:[]};
    }

Noun0_valency3 = a:Stem3 b:Noun_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=3, level=0, definition: " + parseStem(a)), children:[]};
    }

Noun0_valency4 = a:Stem4 b:Noun_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=4, level=0, definition: " + parseStem(a)), children:[]};
    }

Noun1_valency1 = a:Stem1 b:Noun_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=1, level=1, definition: " + parseStem(a)), children:[]};
    }

Noun1_valency2 = a:Stem2 b:Noun_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=2, level=1, definition: " + parseStem(a)), children:[]};
    }

Noun1_valency3 = a:Stem3 b:Noun_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=3, level=1, definition: " + parseStem(a)), children:[]};
    }

Noun1_valency4 = a:Stem4 b:Noun_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=4, level=1, definition: " + parseStem(a)), children:[]};
    }

Noun2_valency1 = a:Stem1 b:Noun_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=1, level=2, definition: " + parseStem(a)), children:[]};
    }

Noun2_valency2 = a:Stem2 b:Noun_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=2, level=2, definition: " + parseStem(a)), children:[]};
    }

Noun2_valency3 = a:Stem3 b:Noun_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=3, level=2, definition: " + parseStem(a)), children:[]};
    }

Noun2_valency4 = a:Stem4 b:Noun_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=4, level=2, definition: " + parseStem(a)), children:[]};
    }

Noun3_valency1 = a:Stem1 b:Noun_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=1, level=3, definition: " + parseStem(a)), children:[]};
    }

Noun3_valency2 = a:Stem2 b:Noun_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=2, level=3, definition: " + parseStem(a)), children:[]};
    }

Noun3_valency3 = a:Stem3 b:Noun_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=3, level=3, definition: " + parseStem(a)), children:[]};
    }

Noun3_valency4 = a:Stem4 b:Noun_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: noun, valency=4, level=3, definition: " + parseStem(a)), children:[]};
    }

Gerund0_valency0 = a:Stem0 b:Gerund_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=0, level=0, definition: " + parseStem(a)), children:[]};
    }

Gerund0_valency1 = a:Stem1 b:Gerund_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=1, level=0, definition: " + parseStem(a)), children:[]};
    }

Gerund0_valency2 = a:Stem2 b:Gerund_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=2, level=0, definition: " + parseStem(a)), children:[]};
    }

Gerund0_valency3 = a:Stem3 b:Gerund_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=3, level=0, definition: " + parseStem(a)), children:[]};
    }

Gerund0_valency4 = a:Stem4 b:Gerund_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=4, level=0, definition: " + parseStem(a)), children:[]};
    }

Gerund1_valency0 = a:Stem0 b:Gerund_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=0, level=1, definition: " + parseStem(a)), children:[]};
    }

Gerund1_valency1 = a:Stem1 b:Gerund_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=1, level=1, definition: " + parseStem(a)), children:[]};
    }

Gerund1_valency2 = a:Stem2 b:Gerund_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=2, level=1, definition: " + parseStem(a)), children:[]};
    }

Gerund1_valency3 = a:Stem3 b:Gerund_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=3, level=1, definition: " + parseStem(a)), children:[]};
    }

Gerund1_valency4 = a:Stem4 b:Gerund_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=4, level=1, definition: " + parseStem(a)), children:[]};
    }

Gerund2_valency0 = a:Stem0 b:Gerund_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=0, level=2, definition: " + parseStem(a)), children:[]};
    }

Gerund2_valency1 = a:Stem1 b:Gerund_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=1, level=2, definition: " + parseStem(a)), children:[]};
    }

Gerund2_valency2 = a:Stem2 b:Gerund_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=2, level=2, definition: " + parseStem(a)), children:[]};
    }

Gerund2_valency3 = a:Stem3 b:Gerund_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=3, level=2, definition: " + parseStem(a)), children:[]};
    }

Gerund2_valency4 = a:Stem4 b:Gerund_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=4, level=2, definition: " + parseStem(a)), children:[]};
    }

Gerund3_valency0 = a:Stem0 b:Gerund_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=0, level=3, definition: " + parseStem(a)), children:[]};
    }

Gerund3_valency1 = a:Stem1 b:Gerund_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=1, level=3, definition: " + parseStem(a)), children:[]};
    }

Gerund3_valency2 = a:Stem2 b:Gerund_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=2, level=3, definition: " + parseStem(a)), children:[]};
    }

Gerund3_valency3 = a:Stem3 b:Gerund_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=3, level=3, definition: " + parseStem(a)), children:[]};
    }

Gerund3_valency4 = a:Stem4 b:Gerund_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: gerund, valency=4, level=3, definition: " + parseStem(a)), children:[]};
    }

Adverb0_valency1 = a:Stem1 b:Adverb_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=1, level=0, definition: " + parseStem(a)), children:[]};
    }

Adverb0_valency2 = a:Stem2 b:Adverb_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=2, level=0, definition: " + parseStem(a)), children:[]};
    }

Adverb0_valency3 = a:Stem3 b:Adverb_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=3, level=0, definition: " + parseStem(a)), children:[]};
    }

Adverb0_valency4 = a:Stem4 b:Adverb_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=4, level=0, definition: " + parseStem(a)), children:[]};
    }

Adverb1_valency1 = a:Stem1 b:Adverb_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=1, level=1, definition: " + parseStem(a)), children:[]};
    }

Adverb1_valency2 = a:Stem2 b:Adverb_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=2, level=1, definition: " + parseStem(a)), children:[]};
    }

Adverb1_valency3 = a:Stem3 b:Adverb_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=3, level=1, definition: " + parseStem(a)), children:[]};
    }

Adverb1_valency4 = a:Stem4 b:Adverb_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=4, level=1, definition: " + parseStem(a)), children:[]};
    }

Adverb2_valency1 = a:Stem1 b:Adverb_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=1, level=2, definition: " + parseStem(a)), children:[]};
    }

Adverb2_valency2 = a:Stem2 b:Adverb_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=2, level=2, definition: " + parseStem(a)), children:[]};
    }

Adverb2_valency3 = a:Stem3 b:Adverb_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=3, level=2, definition: " + parseStem(a)), children:[]};
    }

Adverb2_valency4 = a:Stem4 b:Adverb_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=4, level=2, definition: " + parseStem(a)), children:[]};
    }

Adverb3_valency1 = a:Stem1 b:Adverb_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=1, level=3, definition: " + parseStem(a)), children:[]};
    }

Adverb3_valency2 = a:Stem2 b:Adverb_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=2, level=3, definition: " + parseStem(a)), children:[]};
    }

Adverb3_valency3 = a:Stem3 b:Adverb_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=3, level=3, definition: " + parseStem(a)), children:[]};
    }

Adverb3_valency4 = a:Stem4 b:Adverb_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: adverb, valency=4, level=3, definition: " + parseStem(a)), children:[]};
    }

Apposition0_valency1 = a:Stem1 b:Apposition_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=1, level=0, definition: " + parseStem(a)), children:[]};
    }

Apposition0_valency2 = a:Stem2 b:Apposition_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=2, level=0, definition: " + parseStem(a)), children:[]};
    }

Apposition0_valency3 = a:Stem3 b:Apposition_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=3, level=0, definition: " + parseStem(a)), children:[]};
    }

Apposition0_valency4 = a:Stem4 b:Apposition_suffix c:Level0_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=4, level=0, definition: " + parseStem(a)), children:[]};
    }

Apposition1_valency1 = a:Stem1 b:Apposition_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=1, level=1, definition: " + parseStem(a)), children:[]};
    }

Apposition1_valency2 = a:Stem2 b:Apposition_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=2, level=1, definition: " + parseStem(a)), children:[]};
    }

Apposition1_valency3 = a:Stem3 b:Apposition_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=3, level=1, definition: " + parseStem(a)), children:[]};
    }

Apposition1_valency4 = a:Stem4 b:Apposition_suffix c:Level1_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=4, level=1, definition: " + parseStem(a)), children:[]};
    }

Apposition2_valency1 = a:Stem1 b:Apposition_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=1, level=2, definition: " + parseStem(a)), children:[]};
    }

Apposition2_valency2 = a:Stem2 b:Apposition_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=2, level=2, definition: " + parseStem(a)), children:[]};
    }

Apposition2_valency3 = a:Stem3 b:Apposition_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=3, level=2, definition: " + parseStem(a)), children:[]};
    }

Apposition2_valency4 = a:Stem4 b:Apposition_suffix c:Level2_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=4, level=2, definition: " + parseStem(a)), children:[]};
    }

Apposition3_valency1 = a:Stem1 b:Apposition_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=1, level=3, definition: " + parseStem(a)), children:[]};
    }

Apposition3_valency2 = a:Stem2 b:Apposition_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=2, level=3, definition: " + parseStem(a)), children:[]};
    }

Apposition3_valency3 = a:Stem3 b:Apposition_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=3, level=3, definition: " + parseStem(a)), children:[]};
    }

Apposition3_valency4 = a:Stem4 b:Apposition_suffix c:Level3_suffix Whitespace {
        return {name:("<b>" + a + b + c + "</b>: apposition, valency=4, level=3, definition: " + parseStem(a)), children:[]};
    }

Adverb0_conjunction = a:("ma" / "mi" / "mu") Whitespace {
        return {name:("<b>" + a + "</b>: adverb conjunction, level=0, definition: " + parseStem(a)), children:[]};
    }

Adverb1_conjunction = a:("meu" / "mia" / "mua") Whitespace {
        return {name:("<b>" + a + "</b>: adverb conjunction, level=1, definition: " + parseStem(a)), children:[]};
    }

Adverb2_conjunction = a:("mai" / "mie" / "mui") Whitespace {
        return {name:("<b>" + a + "</b>: adverb conjunction, level=2, definition: " + parseStem(a)), children:[]};
    }

Adverb3_conjunction = a:("mau" / "miu" / "muo") Whitespace {
        return {name:("<b>" + a + "</b>: adverb conjunction, level=3, definition: " + parseStem(a)), children:[]};
    }

Argument0_conjunction = a:("na" / "ni" / "nu") Whitespace {
        return {name:("<b>" + a + "</b>: argument conjunction, level=0, definition: " + parseStem(a)), children:[]};
    }

Argument1_conjunction = a:("neu" / "nia" / "nua") Whitespace {
        return {name:("<b>" + a + "</b>: argument conjunction, level=1, definition: " + parseStem(a)), children:[]};
    }

Argument2_conjunction = a:("nai" / "nie" / "nui") Whitespace {
        return {name:("<b>" + a + "</b>: argument conjunction, level=2, definition: " + parseStem(a)), children:[]};
    }

Argument3_conjunction = a:("nau" / "niu" / "nuo") Whitespace {
        return {name:("<b>" + a + "</b>: argument conjunction, level=3, definition: " + parseStem(a)), children:[]};
    }

Sentence_conjunction = a:("ra" / "ri" / "ru") Whitespace {
        return {name:("<b>" + a + "</b>: sentence conjunction"), children:[]};
    }

Comparative_conjunction = a:"ce" Whitespace {
        return {name:("<b>" + a + "</b>: comparative conjunction"), children:[]};
    }

Comparative_adverb = a:"mo" Whitespace {
        return {name:("<b>" + a + "</b>: comparative adverb"), children:[]};
    }

Superlative_adverb = a:"nai" Whitespace {
        return {name:("<b>" + a + "</b>: superlative adverb"), children:[]};
    }

Subsentence_end = a:"le" Whitespace {
        return {name:("<b>" + a + "</b>: subsentence termination particle"), children:[]};
    }

Negation = a:"ne" Whitespace {
        return {name:("<b>" + a + "</b>: negation particle"), children:[]};
    }

Interjection = a:("vau"/"yoi"/"yei"/"yura") Whitespace {
        return {name:("<b>" + a + "</b>: interjection"), children:[]};
    }

Whitespace = !. / [ \t\n\r]+

Verb_suffix = "r"

Gerund_suffix = "q"

Noun_suffix = "n"

Apposition_suffix = "l"

Adverb_suffix = "m"

Level0_suffix = ""

Level1_suffix = "a"

Level2_suffix = "i"

Level3_suffix = "u"

Stem0 = a:Consonant bs:Syllable* c:"o" {
    return [a].concat(bs).concat(c).join("")
}

Stem1 = a:Consonant bs:Syllable* c:"a" {
    return [a].concat(bs).concat(c).join("")
}

Stem2 = a:Consonant bs:Syllable* c:("ia"/"i") {
    return [a].concat(bs).concat(c).join("")
}

Stem3 = a:Consonant bs:Syllable* c:("ua"/"ui"/"u") {
    return [a].concat(bs).concat(c).join("")
}

Stem4 = a:Consonant bs:Syllable* c:("ie"/"ei"/"eu"/"e") {
    return [a].concat(bs).concat(c).join("")
}

Syllable = !(Vowel [mnqrl] Vowel? Whitespace) a:Vowel b:Consonant {
    return a + b
}

Consonant = [mnqrlbdgptkvwzjyfcshx]

Vowel = "ui"/"iu"/"ei"/"eu"/"ie"/"ie"/"oi"/"ou"/"io"/"uo"/"ai"/"au"
    /"ia"/"ua"/"i"/"u"/"e"/"o"/"a"

`

