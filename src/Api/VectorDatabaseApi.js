//Supabase Guide: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs
import {createClient} from "@supabase/supabase-js";

const supabase = createClient(process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_URL, process.env.REACT_APP_SUPABASE_SERVICE_ROLE_KEY);

// https://supabase.com/dashboard/project/jdmpnfotbjwyxdxmlrup/api?rpc=pg_search
export async function vectorSearch(query_embedding) {
    return supabase.rpc('pg_search', {
        match_count: 3,
        query_embedding: query_embedding,
        similarity_threshold: 0.01
    });
}
