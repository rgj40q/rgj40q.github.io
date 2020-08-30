
start
    = a:text { printtree(a); }

sentence
    = a:AdvP0? b:Arg0 c:AdvP0? d:VP   e:AdvP0? f:Arg0 g:AdvP0? { ; } // SVO
    / a:AdvP0? b:VP   c:AdvP0? d:Arg0 e:AdvP0? f:Arg0 g:AdvP0? { ; } // VSO
    / a:AdvP0? b:Arg0 c:AdvP0? d:Arg0 e:AdvP0? f:VP   g:AdvP0? { ; } // SOV
    / a:AdvP0? b:Arg0 c:AdvP0? d:VP   e:AdvP0? { ; } // SV
    / a:AdvP0? b:VP   c:AdvP0? d:Arg0 e:AdvP0? { ; } // VS
    / a:AdvP0? b:VP   c:AdvP0? { ; } // V
    / a:Arg0 { ; } // S
    / a:Interj { ; }

